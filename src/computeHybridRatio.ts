export interface RatioParams {
  headcount: number;
  denominator: number; // X in 1:X
  densityPerPerson: number;
  supportFactor?: number;
  originalMonthlyCost: number;
  pricingEngine: (area: number) => number;
}

export interface RatioResult {
  D_ratio: number;
  workpointAreaRatio: number;
  totalAreaRatio: number;
  newMonthlyCostRatio: number;
  savingsRatio: number;
  savingsPctRatio: number;
}

export function computeHybridRatio(params: RatioParams): RatioResult {
  const {
    headcount,
    denominator,
    densityPerPerson,
    supportFactor,
    originalMonthlyCost,
    pricingEngine
  } = params;

  const n = Math.max(0, Math.floor(headcount));
  const X = Math.max(1, denominator);
  const D_ratio = Math.min(n, Math.ceil(n / X));

  const workpointAreaRatio = D_ratio * densityPerPerson;
  const totalAreaRatio =
    typeof supportFactor === 'number'
      ? workpointAreaRatio * (1 + supportFactor)
      : workpointAreaRatio;

  const newMonthlyCostRatio = pricingEngine(totalAreaRatio);
  const savingsRatio = Math.max(originalMonthlyCost - newMonthlyCostRatio, 0);
  const savingsPctRatio =
    originalMonthlyCost > 0 ? (savingsRatio / originalMonthlyCost) * 100 : 0;

  return {
    D_ratio,
    workpointAreaRatio,
    totalAreaRatio,
    newMonthlyCostRatio,
    savingsRatio,
    savingsPctRatio
  };
}
