export interface BusiestDayParams {
  headcount: number;
  daysInOfficePerWeek: number;
  anchorFactor: number; // 1.0, 1.2, 1.4
  densityPerPerson: number;
  supportFactor?: number;
  originalMonthlyCost: number;
  pricingEngine: (area: number) => number;
}

export interface BusiestDayResult {
  D_peak: number;
  workpointAreaPeak: number;
  totalAreaPeak: number;
  newMonthlyCost: number;
  savings: number;
  savingsPct: number;
}

export function computeHybridBusiestDay(params: BusiestDayParams): BusiestDayResult {
  const {
    headcount,
    daysInOfficePerWeek,
    anchorFactor,
    densityPerPerson,
    supportFactor,
    originalMonthlyCost,
    pricingEngine
  } = params;

  const n = Math.max(0, Math.floor(headcount));
  const d = Math.min(Math.max(daysInOfficePerWeek, 0), 5);
  const p = Math.max(0, Math.min(d / 5, 1));

  const mu = n * p;
  const sigma = Math.sqrt(n * p * (1 - p));
  const z95 = 1.645;
  const basePeak = mu + z95 * sigma;
  const peakWithAnchor = basePeak * anchorFactor;

  let D_peak = Math.min(n, Math.ceil(peakWithAnchor));
  if (n < 30) {
    D_peak = Math.min(n, Math.ceil(peakWithAnchor * 1.05));
  }

  const workpointAreaPeak = D_peak * densityPerPerson;
  const totalAreaPeak =
    typeof supportFactor === 'number'
      ? workpointAreaPeak * (1 + supportFactor)
      : workpointAreaPeak;

  const newMonthlyCost = pricingEngine(totalAreaPeak);
  const savings = Math.max(originalMonthlyCost - newMonthlyCost, 0);
  const savingsPct =
    originalMonthlyCost > 0 ? (savings / originalMonthlyCost) * 100 : 0;

  return {
    D_peak,
    workpointAreaPeak,
    totalAreaPeak,
    newMonthlyCost,
    savings,
    savingsPct
  };
}
