import { computeHybridRatio } from '../src/computeHybridRatio';

describe('computeHybridRatio', () => {
  it('computes desks for different ratios', () => {
    const pricingEngine = jest.fn().mockReturnValue(0);

    const r1 = computeHybridRatio({
      headcount: 120,
      denominator: 1,
      densityPerPerson: 10,
      originalMonthlyCost: 1000,
      pricingEngine
    });
    expect(r1.D_ratio).toBe(120);

    const r2 = computeHybridRatio({
      headcount: 120,
      denominator: 1.25,
      densityPerPerson: 10,
      originalMonthlyCost: 1000,
      pricingEngine
    });
    expect(r2.D_ratio).toBe(96);

    const r3 = computeHybridRatio({
      headcount: 120,
      denominator: 3,
      densityPerPerson: 10,
      originalMonthlyCost: 1000,
      pricingEngine
    });
    expect(r3.D_ratio).toBe(40);
  });

  it('computes area, cost and savings', () => {
    const pricingEngine = jest.fn().mockReturnValue(9000);
    const result = computeHybridRatio({
      headcount: 100,
      denominator: 2,
      densityPerPerson: 8,
      supportFactor: 0.5,
      originalMonthlyCost: 20000,
      pricingEngine
    });

    expect(result.D_ratio).toBe(50);
    expect(pricingEngine).toHaveBeenCalledWith(600);
    expect(result.totalAreaRatio).toBe(600);
    expect(result.newMonthlyCostRatio).toBe(9000);
    expect(result.savingsRatio).toBe(11000);
    expect(result.savingsPctRatio).toBeCloseTo(55);
  });
});
