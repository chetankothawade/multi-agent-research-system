#!/usr/bin/env node
const { env } = process;
const fetch = global.fetch || require('node-fetch');

const TIMEOUT = 10000;

function timeoutSignal(ms) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return { signal: controller.signal, clear: () => clearTimeout(id) };
}

async function tryFetch(name, url, options = {}) {
  const to = timeoutSignal(TIMEOUT);
  try {
    const res = await fetch(url, { ...options, signal: to.signal });
    const text = await res.text().catch(() => '');
    return { ok: res.ok, status: res.status, body: text };
  } catch (err) {
    return { ok: false, error: err.message || String(err) };
  } finally {
    to.clear();
  }
}

async function testTavily() {
  const key = env.TAVILY_API_KEY;
  if (!key) return { present: false };
  const url = 'https://api.tavily.com/search';
  const body = JSON.stringify({ query: 'healthcheck', max_results: 1 });
  const res = await tryFetch('tavily', url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body,
  });
  return { present: true, url, result: res };
}

async function testDeepInfra() {
  const key = env.DEEPINFRA_API_KEY;
  const base = env.DEEPINFRA_BASE_URL || 'https://api.deepinfra.com/v1/openai';
  if (!key) return { present: false };
  // Try a GET to the base URL and also attempt a models or health path if available
  const attempts = [base, `${base.replace(/\/$/, '')}/models`, `${base.replace(/\/$/, '')}/health`];
  for (const u of attempts) {
    const res = await tryFetch('deepinfra', u, { method: 'GET', headers: { Authorization: `Bearer ${key}` } });
    if (res && (res.ok || res.status)) return { present: true, url: u, result: res };
  }
  return { present: true, url: attempts[0], result: { ok: false } };
}

async function testSerper() {
  const key = env.SERPER_API_KEY;
  if (!key) return { present: false };
  const endpoints = [
    'https://google.serper.dev/search',
    'https://api.serper.dev/search',
    'https://serper.dev/search',
  ];
  for (const url of endpoints) {
    // try X-API-KEY header
    let res = await tryFetch('serper', url, { method: 'GET', headers: { 'X-API-KEY': key } });
    if (res && (res.ok || res.status)) return { present: true, url, header: 'X-API-KEY', result: res };
    // try Authorization header
    res = await tryFetch('serper', url, { method: 'GET', headers: { Authorization: `Bearer ${key}` } });
    if (res && (res.ok || res.status)) return { present: true, url, header: 'Authorization', result: res };
  }
  return { present: true, url: endpoints[0], result: { ok: false } };
}

async function main() {
  console.log('Validating API keys (presence + basic request).');
  console.log('Note: network access required; results show HTTP status or error.');

  const tavily = await testTavily();
  const deepinfra = await testDeepInfra();
  const serper = await testSerper();

  console.log('\nTavily:');
  if (!tavily.present) console.log('  - Not configured (TAVILY_API_KEY missing)');
  else console.log(`  - Endpoint: ${tavily.url}\n  - Status: ${tavily.result.status || 'error'}\n  - OK: ${tavily.result.ok}\n`);

  console.log('DeepInfra:');
  if (!deepinfra.present) console.log('  - Not configured (DEEPINFRA_API_KEY missing)');
  else console.log(`  - Endpoint: ${deepinfra.url}\n  - Status: ${deepinfra.result.status || 'error'}\n  - OK: ${deepinfra.result.ok}\n`);

  console.log('Serper:');
  if (!serper.present) console.log('  - Not configured (SERPER_API_KEY missing)');
  else console.log(`  - Endpoint: ${serper.url}\n  - Header tried: ${serper.header || 'unknown'}\n  - Status: ${serper.result.status || 'error'}\n  - OK: ${serper.result.ok}\n`);

  const missing = [!tavily.present, !deepinfra.present, !serper.present].filter(Boolean).length;
  process.exit(missing ? 2 : 0);
}

main().catch((e) => {
  console.error('Unexpected error:', e);
  process.exit(3);
});
