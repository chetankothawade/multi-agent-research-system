# Multi-Agent Research Backend

## Setup

1. Copy `.env.example` to `.env`.
2. Set `DATABASE_URL`, `JWT_SECRET`, and any external API keys.
3. Run `npm run prisma:generate`.
4. Run `npm run prisma:migrate`.
5. Start development with `npm run dev`.

## API

- `POST /auth/register`
- `POST /auth/login`
- `POST /research/start`
- `GET /research/:id`
- `GET /report/:id`
- `GET /observability/session/:id`
- `GET /observability/agent/:id`

## Socket Events

- Client emits `session:join` with a session id.
- Server emits `agent:event` with session, agent, step, and completion events.
