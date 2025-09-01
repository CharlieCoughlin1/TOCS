import { computeHybridBusiestDay } from '../src/computeHybridBusiestDay';

describe('computeHybridBusiestDay', () => {
  it('computes busiest day metrics and calls pricing engine', () => {
    const pricingEngine = jest.fn().mockReturnValue(5000);
    const result = computeHybridBusiestDay({
      headcount: 100,
      daysInOfficePerWeek: 2.5,
      anchorFactor: 1.2,
      densityPerPerson: 9.3,
      supportFactor: 0.4,
      originalMonthlyCost: 10000,
      pricingEngine
    });

    expect(pricingEngine).toHaveBeenCalledWith(911.4);
    expect(result.D_peak).toBe(70);
    expect(result.totalAreaPeak).toBeCloseTo(911.4);
    expect(result.newMonthlyCost).toBe(5000);
    expect(result.savings).toBe(5000);
    expect(result.savingsPct).toBeCloseTo(50);
  });

  it('applies small team buffer and caps desks at headcount', () => {
    const pricingEngine = jest.fn().mockReturnValue(0);

    const resSmall = computeHybridBusiestDay({
      headcount: 20,
      daysInOfficePerWeek: 2,
      anchorFactor: 1.0,
      densityPerPerson: 10,
      originalMonthlyCost: 1000,
      pricingEngine
    });
    expect(resSmall.D_peak).toBe(13);
    expect(resSmall.D_peak).toBeLessThanOrEqual(20);

    const resCap = computeHybridBusiestDay({
      headcount: 20,
      daysInOfficePerWeek: 5,
      anchorFactor: 1.4,
      densityPerPerson: 10,
      originalMonthlyCost: 1000,
      pricingEngine
    });
    expect(resCap.D_peak).toBeLessThanOrEqual(20);
  });
});
