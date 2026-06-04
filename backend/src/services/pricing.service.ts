import { prisma } from "../prisma/client";

export class PricingService {
  async calculate(modelName: string, promptTokens: number, completionTokens: number) {
    const pricing = await prisma.modelPricing.findUnique({ where: { modelName } });
    if (!pricing) {
      return 0;
    }

    const input = Number(pricing.inputCostPerMillion) * (promptTokens / 1_000_000);
    const output = Number(pricing.outputCostPerMillion) * (completionTokens / 1_000_000);
    return Number((input + output).toFixed(8));
  }
}
