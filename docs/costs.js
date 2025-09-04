const COSTS = {
  "Aberdeen": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 23.99,
      "managementFees": 2.03,
      "netEffectiveRent": 30.06,
      "rates": 10.44,
      "softFM": 11.78,
      "totalSqft": 88.99,
      "totalWorkstation": 8899.28
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 28.16,
      "managementFees": 1.74,
      "netEffectiveRent": 20.17,
      "rates": 8.95,
      "softFM": 11.78,
      "totalSqft": 81.49,
      "totalWorkstation": 8148.83
    }
  },
  "Basingstoke": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.58,
      "managementFees": 1.87,
      "netEffectiveRent": 31.35,
      "rates": 13.32,
      "softFM": 11.82,
      "totalSqft": 91.63,
      "totalWorkstation": 9162.84
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 27.09,
      "managementFees": 1.57,
      "netEffectiveRent": 17.33,
      "rates": 10.27,
      "softFM": 11.82,
      "totalSqft": 78.78,
      "totalWorkstation": 7877.84
    }
  },
  "Belfast": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 21.19,
      "managementFees": 1.75,
      "netEffectiveRent": 22.95,
      "rates": 11.3,
      "softFM": 11.49,
      "totalSqft": 79.37,
      "totalWorkstation": 7937.27
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 25.96,
      "managementFees": 1.58,
      "netEffectiveRent": 16.2,
      "rates": 9.3,
      "softFM": 11.49,
      "totalSqft": 75.22,
      "totalWorkstation": 7522.12
    }
  },
  "Birmingham": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.01,
      "managementFees": 2.19,
      "netEffectiveRent": 39.19,
      "rates": 15.9,
      "softFM": 11.99,
      "totalSqft": 101.97,
      "totalWorkstation": 10196.96
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.64,
      "managementFees": 1.96,
      "netEffectiveRent": 26.8,
      "rates": 10.76,
      "softFM": 11.99,
      "totalSqft": 88.85,
      "totalWorkstation": 8884.52
    }
  },
  "Bournemouth": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.57,
      "managementFees": 1.85,
      "netEffectiveRent": 27.0,
      "rates": 7.2,
      "softFM": 11.61,
      "totalSqft": 80.92,
      "totalWorkstation": 8091.85
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 27.11,
      "managementFees": 1.7,
      "netEffectiveRent": 17.85,
      "rates": 5.76,
      "softFM": 11.61,
      "totalSqft": 74.72,
      "totalWorkstation": 7471.99
    }
  },
  "Bracknell": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.43,
      "managementFees": 1.96,
      "netEffectiveRent": 26.81,
      "rates": 8.76,
      "softFM": 11.78,
      "totalSqft": 82.43,
      "totalWorkstation": 8242.82
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.89,
      "managementFees": 1.7,
      "netEffectiveRent": 19.8,
      "rates": 7.72,
      "softFM": 11.78,
      "totalSqft": 78.58,
      "totalWorkstation": 7857.97
    }
  },
  "Brighton": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 22.69,
      "managementFees": 2.19,
      "netEffectiveRent": 39.6,
      "rates": 10.0,
      "softFM": 11.91,
      "totalSqft": 97.56,
      "totalWorkstation": 9755.94
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 27.16,
      "managementFees": 1.94,
      "netEffectiveRent": 29.75,
      "rates": 9.72,
      "softFM": 11.91,
      "totalSqft": 91.65,
      "totalWorkstation": 9164.84
    }
  },
  "Bristol": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 22.42,
      "managementFees": 2.27,
      "netEffectiveRent": 40.4,
      "rates": 11.79,
      "softFM": 11.95,
      "totalSqft": 100.0,
      "totalWorkstation": 9999.87
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 26.95,
      "managementFees": 2.05,
      "netEffectiveRent": 33.25,
      "rates": 9.98,
      "softFM": 11.95,
      "totalSqft": 95.35,
      "totalWorkstation": 9534.92
    }
  },
  "Cambridge": {
    "new": {
      "annualisedCosts": 11.64,
      "hardFM": 22.18,
      "managementFees": 2.72,
      "netEffectiveRent": 61.75,
      "rates": 19.93,
      "softFM": 11.74,
      "totalSqft": 129.97,
      "totalWorkstation": 12996.68
    },
    "old": {
      "annualisedCosts": 11.64,
      "hardFM": 26.73,
      "managementFees": 2.23,
      "netEffectiveRent": 37.0,
      "rates": 17.1,
      "softFM": 11.74,
      "totalSqft": 106.45,
      "totalWorkstation": 10644.88
    }
  },
  "Cardiff": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.0,
      "managementFees": 1.77,
      "netEffectiveRent": 24.03,
      "rates": 9.7,
      "softFM": 11.7,
      "totalSqft": 79.89,
      "totalWorkstation": 7989.02
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.53,
      "managementFees": 1.51,
      "netEffectiveRent": 17.17,
      "rates": 9.11,
      "softFM": 11.7,
      "totalSqft": 76.72,
      "totalWorkstation": 7671.84
    }
  },
  "Crawley": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.39,
      "managementFees": 1.84,
      "netEffectiveRent": 33.25,
      "rates": 11.39,
      "softFM": 11.74,
      "totalSqft": 91.3,
      "totalWorkstation": 9129.95
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.93,
      "managementFees": 1.67,
      "netEffectiveRent": 24.75,
      "rates": 10.29,
      "softFM": 11.74,
      "totalSqft": 86.07,
      "totalWorkstation": 8607.3
    }
  },
  "Croydon": {
    "new": {
      "annualisedCosts": 11.64,
      "hardFM": 22.72,
      "managementFees": 2.15,
      "netEffectiveRent": 37.19,
      "rates": 15.75,
      "softFM": 11.61,
      "totalSqft": 101.07,
      "totalWorkstation": 10106.74
    },
    "old": {
      "annualisedCosts": 11.64,
      "hardFM": 27.09,
      "managementFees": 1.91,
      "netEffectiveRent": 28.44,
      "rates": 14.18,
      "softFM": 11.61,
      "totalSqft": 94.88,
      "totalWorkstation": 9487.51
    }
  },
  "Edinburgh": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 24.3,
      "managementFees": 2.38,
      "netEffectiveRent": 43.32,
      "rates": 13.02,
      "softFM": 11.91,
      "totalSqft": 105.62,
      "totalWorkstation": 10561.89
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 28.54,
      "managementFees": 1.97,
      "netEffectiveRent": 30.06,
      "rates": 11.6,
      "softFM": 11.91,
      "totalSqft": 94.78,
      "totalWorkstation": 9477.93
    }
  },
  "Exeter": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.09,
      "managementFees": 1.81,
      "netEffectiveRent": 23.13,
      "rates": 7.2,
      "softFM": 11.82,
      "totalSqft": 76.74,
      "totalWorkstation": 7674.39
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.58,
      "managementFees": 1.7,
      "netEffectiveRent": 19.89,
      "rates": 5.35,
      "softFM": 11.82,
      "totalSqft": 76.03,
      "totalWorkstation": 7602.84
    }
  },
  "Farnborough": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.3,
      "managementFees": 1.94,
      "netEffectiveRent": 30.0,
      "rates": 11.59,
      "softFM": 11.86,
      "totalSqft": 88.38,
      "totalWorkstation": 8837.72
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.73,
      "managementFees": 1.69,
      "netEffectiveRent": 22.69,
      "rates": 9.26,
      "softFM": 11.86,
      "totalSqft": 82.93,
      "totalWorkstation": 8293.1
    }
  },
  "Glasgow": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 24.2,
      "managementFees": 2.06,
      "netEffectiveRent": 35.62,
      "rates": 13.15,
      "softFM": 11.91,
      "totalSqft": 97.64,
      "totalWorkstation": 9763.55
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 28.52,
      "managementFees": 1.9,
      "netEffectiveRent": 25.75,
      "rates": 8.21,
      "softFM": 11.91,
      "totalSqft": 86.98,
      "totalWorkstation": 8698.07
    }
  },
  "Guildford": {
    "new": {
      "annualisedCosts": 11.64,
      "hardFM": 22.75,
      "managementFees": 2.19,
      "netEffectiveRent": 39.19,
      "rates": 15.07,
      "softFM": 11.86,
      "totalSqft": 102.69,
      "totalWorkstation": 10269.43
    },
    "old": {
      "annualisedCosts": 11.64,
      "hardFM": 27.24,
      "managementFees": 1.77,
      "netEffectiveRent": 24.0,
      "rates": 13.81,
      "softFM": 11.86,
      "totalSqft": 90.33,
      "totalWorkstation": 9032.8
    }
  },
  "Heathrow": {
    "new": {
      "annualisedCosts": 11.64,
      "hardFM": 23.18,
      "managementFees": 2.15,
      "netEffectiveRent": 37.19,
      "rates": 14.63,
      "softFM": 12.07,
      "totalSqft": 100.86,
      "totalWorkstation": 10086.14
    },
    "old": {
      "annualisedCosts": 11.64,
      "hardFM": 27.69,
      "managementFees": 1.9,
      "netEffectiveRent": 28.44,
      "rates": 10.91,
      "softFM": 12.07,
      "totalSqft": 92.65,
      "totalWorkstation": 9264.74
    }
  },
  "High Wycombe": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.43,
      "managementFees": 1.83,
      "netEffectiveRent": 23.51,
      "rates": 12.82,
      "softFM": 11.74,
      "totalSqft": 83.03,
      "totalWorkstation": 8302.64
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.91,
      "managementFees": 1.64,
      "netEffectiveRent": 17.33,
      "rates": 4.94,
      "softFM": 11.74,
      "totalSqft": 73.25,
      "totalWorkstation": 7325.5
    }
  },
  "Leeds": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 21.91,
      "managementFees": 2.1,
      "netEffectiveRent": 39.31,
      "rates": 11.91,
      "softFM": 11.82,
      "totalSqft": 98.21,
      "totalWorkstation": 9821.34
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 26.49,
      "managementFees": 1.81,
      "netEffectiveRent": 29.6,
      "rates": 9.48,
      "softFM": 11.82,
      "totalSqft": 90.37,
      "totalWorkstation": 9037.03
    }
  },
  "Leicester": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 21.73,
      "managementFees": 1.61,
      "netEffectiveRent": 19.59,
      "rates": 7.49,
      "softFM": 11.65,
      "totalSqft": 72.76,
      "totalWorkstation": 7275.6
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.33,
      "managementFees": 1.57,
      "netEffectiveRent": 15.26,
      "rates": 5.53,
      "softFM": 11.65,
      "totalSqft": 71.04,
      "totalWorkstation": 7103.6
    }
  },
  "Liverpool": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 21.9,
      "managementFees": 1.77,
      "netEffectiveRent": 25.08,
      "rates": 7.04,
      "softFM": 11.74,
      "totalSqft": 78.69,
      "totalWorkstation": 7869.13
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 26.47,
      "managementFees": 1.61,
      "netEffectiveRent": 16.5,
      "rates": 6.72,
      "softFM": 11.74,
      "totalSqft": 74.21,
      "totalWorkstation": 7421.14
    }
  },
  "London - City": {
    "new": {
      "annualisedCosts": 12.59,
      "hardFM": 24.07,
      "managementFees": 3.41,
      "netEffectiveRent": 80.75,
      "rates": 33.65,
      "softFM": 12.74,
      "totalSqft": 167.2,
      "totalWorkstation": 16720.17
    },
    "old": {
      "annualisedCosts": 12.59,
      "hardFM": 28.47,
      "managementFees": 2.48,
      "netEffectiveRent": 44.0,
      "rates": 23.01,
      "softFM": 12.74,
      "totalSqft": 123.29,
      "totalWorkstation": 12329.17
    }
  },
  "London - Docklands": {
    "new": {
      "annualisedCosts": 12.59,
      "hardFM": 24.14,
      "managementFees": 2.57,
      "netEffectiveRent": 43.6,
      "rates": 25.37,
      "softFM": 12.45,
      "totalSqft": 120.71,
      "totalWorkstation": 12071.35
    },
    "old": {
      "annualisedCosts": 12.59,
      "hardFM": 28.57,
      "managementFees": 1.92,
      "netEffectiveRent": 21.75,
      "rates": 17.91,
      "softFM": 12.45,
      "totalSqft": 95.19,
      "totalWorkstation": 9518.82
    }
  },
  "London - Hammersmith": {
    "new": {
      "annualisedCosts": 12.59,
      "hardFM": 24.02,
      "managementFees": 2.73,
      "netEffectiveRent": 51.75,
      "rates": 26.83,
      "softFM": 12.49,
      "totalSqft": 130.4,
      "totalWorkstation": 13040.44
    },
    "old": {
      "annualisedCosts": 12.59,
      "hardFM": 28.42,
      "managementFees": 2.19,
      "netEffectiveRent": 33.0,
      "rates": 25.24,
      "softFM": 12.49,
      "totalSqft": 113.94,
      "totalWorkstation": 11393.95
    }
  },
  "London - Midtown": {
    "new": {
      "annualisedCosts": 12.59,
      "hardFM": 24.11,
      "managementFees": 3.33,
      "netEffectiveRent": 72.19,
      "rates": 24.38,
      "softFM": 12.74,
      "totalSqft": 149.34,
      "totalWorkstation": 14934.05
    },
    "old": {
      "annualisedCosts": 12.59,
      "hardFM": 28.51,
      "managementFees": 2.62,
      "netEffectiveRent": 47.85,
      "rates": 21.32,
      "softFM": 12.74,
      "totalSqft": 125.63,
      "totalWorkstation": 12563.49
    }
  },
  "London - Southbank": {
    "new": {
      "annualisedCosts": 12.59,
      "hardFM": 24.02,
      "managementFees": 3.28,
      "netEffectiveRent": 70.13,
      "rates": 33.35,
      "softFM": 12.49,
      "totalSqft": 155.87,
      "totalWorkstation": 15586.72
    },
    "old": {
      "annualisedCosts": 12.59,
      "hardFM": 28.44,
      "managementFees": 2.53,
      "netEffectiveRent": 42.9,
      "rates": 23.91,
      "softFM": 12.49,
      "totalSqft": 122.87,
      "totalWorkstation": 12286.61
    }
  },
  "London - West End Core": {
    "new": {
      "annualisedCosts": 12.59,
      "hardFM": 24.3,
      "managementFees": 4.95,
      "netEffectiveRent": 148.75,
      "rates": 58.64,
      "softFM": 12.78,
      "totalSqft": 262.01,
      "totalWorkstation": 26200.9
    },
    "old": {
      "annualisedCosts": 12.59,
      "hardFM": 28.71,
      "managementFees": 3.19,
      "netEffectiveRent": 72.25,
      "rates": 53.27,
      "softFM": 12.78,
      "totalSqft": 182.8,
      "totalWorkstation": 18280.06
    }
  },
  "London - West End Non Core": {
    "new": {
      "annualisedCosts": 12.59,
      "hardFM": 23.96,
      "managementFees": 3.85,
      "netEffectiveRent": 93.5,
      "rates": 48.96,
      "softFM": 12.78,
      "totalSqft": 195.64,
      "totalWorkstation": 19563.89
    },
    "old": {
      "annualisedCosts": 12.59,
      "hardFM": 28.37,
      "managementFees": 2.99,
      "netEffectiveRent": 59.5,
      "rates": 31.3,
      "softFM": 12.78,
      "totalSqft": 147.53,
      "totalWorkstation": 14752.71
    }
  },
  "Luton": {
    "new": {
      "annualisedCosts": 11.64,
      "hardFM": 22.34,
      "managementFees": 2.11,
      "netEffectiveRent": 23.93,
      "rates": 8.12,
      "softFM": 11.68,
      "totalSqft": 79.82,
      "totalWorkstation": 7982.22
    },
    "old": {
      "annualisedCosts": 11.64,
      "hardFM": 26.89,
      "managementFees": 1.93,
      "netEffectiveRent": 22.5,
      "rates": 7.9,
      "softFM": 11.68,
      "totalSqft": 82.55,
      "totalWorkstation": 8254.84
    }
  },
  "Maidenhead": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.49,
      "managementFees": 2.22,
      "netEffectiveRent": 43.31,
      "rates": 17.23,
      "softFM": 11.65,
      "totalSqft": 107.59,
      "totalWorkstation": 10758.69
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.98,
      "managementFees": 1.93,
      "netEffectiveRent": 25.58,
      "rates": 12.9,
      "softFM": 11.65,
      "totalSqft": 89.73,
      "totalWorkstation": 8973.27
    }
  },
  "Maidstone": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.49,
      "managementFees": 1.84,
      "netEffectiveRent": 30.06,
      "rates": 9.87,
      "softFM": 11.61,
      "totalSqft": 86.56,
      "totalWorkstation": 8655.81
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 27.04,
      "managementFees": 1.63,
      "netEffectiveRent": 18.56,
      "rates": 8.87,
      "softFM": 11.61,
      "totalSqft": 78.4,
      "totalWorkstation": 7839.81
    }
  },
  "Manchester": {
    "new": {
      "annualisedCosts": 12.59,
      "hardFM": 22.27,
      "managementFees": 2.36,
      "netEffectiveRent": 41.63,
      "rates": 15.88,
      "softFM": 11.78,
      "totalSqft": 106.51,
      "totalWorkstation": 10650.86
    },
    "old": {
      "annualisedCosts": 12.59,
      "hardFM": 26.91,
      "managementFees": 2.03,
      "netEffectiveRent": 29.75,
      "rates": 11.43,
      "softFM": 11.78,
      "totalSqft": 94.5,
      "totalWorkstation": 9449.78
    }
  },
  "Milton Keynes": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 22.4,
      "managementFees": 1.87,
      "netEffectiveRent": 33.25,
      "rates": 7.62,
      "softFM": 11.78,
      "totalSqft": 88.09,
      "totalWorkstation": 8808.64
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 26.98,
      "managementFees": 1.75,
      "netEffectiveRent": 25.44,
      "rates": 5.66,
      "softFM": 11.78,
      "totalSqft": 82.78,
      "totalWorkstation": 8278.19
    }
  },
  "Newcastle": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.03,
      "managementFees": 1.92,
      "netEffectiveRent": 30.4,
      "rates": 11.27,
      "softFM": 11.49,
      "totalSqft": 87.8,
      "totalWorkstation": 8780.05
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.59,
      "managementFees": 1.79,
      "netEffectiveRent": 24.05,
      "rates": 9.97,
      "softFM": 11.49,
      "totalSqft": 84.58,
      "totalWorkstation": 8457.6
    }
  },
  "Northampton": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 21.97,
      "managementFees": 1.72,
      "netEffectiveRent": 20.25,
      "rates": 6.7,
      "softFM": 11.4,
      "totalSqft": 72.72,
      "totalWorkstation": 7272.45
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.55,
      "managementFees": 1.49,
      "netEffectiveRent": 15.75,
      "rates": 5.65,
      "softFM": 11.4,
      "totalSqft": 71.53,
      "totalWorkstation": 7153.42
    }
  },
  "Norwich": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 21.6,
      "managementFees": 1.53,
      "netEffectiveRent": 16.5,
      "rates": 7.02,
      "softFM": 11.4,
      "totalSqft": 68.75,
      "totalWorkstation": 6874.78
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.23,
      "managementFees": 1.43,
      "netEffectiveRent": 13.2,
      "rates": 5.67,
      "softFM": 11.4,
      "totalSqft": 68.62,
      "totalWorkstation": 6862.44
    }
  },
  "Nottingham": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 21.85,
      "managementFees": 1.78,
      "netEffectiveRent": 24.06,
      "rates": 7.26,
      "softFM": 11.4,
      "totalSqft": 77.05,
      "totalWorkstation": 7704.57
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.47,
      "managementFees": 1.6,
      "netEffectiveRent": 16.5,
      "rates": 4.48,
      "softFM": 11.4,
      "totalSqft": 71.15,
      "totalWorkstation": 7114.65
    }
  },
  "Oxford": {
    "new": {
      "annualisedCosts": 11.64,
      "hardFM": 22.54,
      "managementFees": 2.95,
      "netEffectiveRent": 60.13,
      "rates": 11.06,
      "softFM": 12.07,
      "totalSqft": 120.39,
      "totalWorkstation": 12039.29
    },
    "old": {
      "annualisedCosts": 11.64,
      "hardFM": 27.11,
      "managementFees": 2.26,
      "netEffectiveRent": 43.94,
      "rates": 11.02,
      "softFM": 12.07,
      "totalSqft": 108.04,
      "totalWorkstation": 10803.72
    }
  },
  "Portsmouth": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.19,
      "managementFees": 1.96,
      "netEffectiveRent": 32.38,
      "rates": 10.23,
      "softFM": 11.7,
      "totalSqft": 89.15,
      "totalWorkstation": 8915.2
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.76,
      "managementFees": 1.75,
      "netEffectiveRent": 20.63,
      "rates": 10.17,
      "softFM": 11.7,
      "totalSqft": 81.71,
      "totalWorkstation": 8170.97
    }
  },
  "Preston": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 21.88,
      "managementFees": 1.63,
      "netEffectiveRent": 17.5,
      "rates": 4.81,
      "softFM": 11.7,
      "totalSqft": 68.22,
      "totalWorkstation": 6821.8
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.49,
      "managementFees": 1.39,
      "netEffectiveRent": 9.63,
      "rates": 3.25,
      "softFM": 11.7,
      "totalSqft": 63.15,
      "totalWorkstation": 6315.17
    }
  },
  "Reading": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.42,
      "managementFees": 2.19,
      "netEffectiveRent": 46.2,
      "rates": 15.59,
      "softFM": 11.74,
      "totalSqft": 108.83,
      "totalWorkstation": 10882.94
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 27.03,
      "managementFees": 1.93,
      "netEffectiveRent": 23.1,
      "rates": 10.82,
      "softFM": 11.74,
      "totalSqft": 85.31,
      "totalWorkstation": 8530.84
    }
  },
  "Richmond": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 22.98,
      "managementFees": 2.83,
      "netEffectiveRent": 56.25,
      "rates": 24.51,
      "softFM": 11.91,
      "totalSqft": 129.65,
      "totalWorkstation": 12964.6
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 27.47,
      "managementFees": 2.47,
      "netEffectiveRent": 44.55,
      "rates": 22.18,
      "softFM": 11.91,
      "totalSqft": 119.75,
      "totalWorkstation": 11974.99
    }
  },
  "Sheffield": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.13,
      "managementFees": 1.85,
      "netEffectiveRent": 29.45,
      "rates": 9.12,
      "softFM": 11.61,
      "totalSqft": 84.85,
      "totalWorkstation": 8484.97
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.46,
      "managementFees": 1.58,
      "netEffectiveRent": 18.5,
      "rates": 5.45,
      "softFM": 11.61,
      "totalSqft": 74.3,
      "totalWorkstation": 7429.69
    }
  },
  "Slough": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.59,
      "managementFees": 2.13,
      "netEffectiveRent": 31.97,
      "rates": 13.74,
      "softFM": 11.91,
      "totalSqft": 93.03,
      "totalWorkstation": 9302.9
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 27.18,
      "managementFees": 1.61,
      "netEffectiveRent": 20.63,
      "rates": 9.35,
      "softFM": 11.91,
      "totalSqft": 81.38,
      "totalWorkstation": 8137.53
    }
  },
  "Southampton": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.32,
      "managementFees": 2.11,
      "netEffectiveRent": 32.38,
      "rates": 12.27,
      "softFM": 11.74,
      "totalSqft": 91.52,
      "totalWorkstation": 9151.78
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.89,
      "managementFees": 1.91,
      "netEffectiveRent": 24.94,
      "rates": 10.17,
      "softFM": 11.74,
      "totalSqft": 86.35,
      "totalWorkstation": 8634.93
    }
  },
  "St Albans": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 22.41,
      "managementFees": 2.34,
      "netEffectiveRent": 39.31,
      "rates": 15.16,
      "softFM": 11.82,
      "totalSqft": 102.21,
      "totalWorkstation": 10220.62
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 26.99,
      "managementFees": 2.03,
      "netEffectiveRent": 33.73,
      "rates": 14.64,
      "softFM": 11.82,
      "totalSqft": 100.37,
      "totalWorkstation": 10037.17
    }
  },
  "Staines": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 22.42,
      "managementFees": 2.15,
      "netEffectiveRent": 34.2,
      "rates": 17.42,
      "softFM": 11.86,
      "totalSqft": 99.22,
      "totalWorkstation": 9921.55
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 27.01,
      "managementFees": 1.9,
      "netEffectiveRent": 23.1,
      "rates": 14.78,
      "softFM": 11.86,
      "totalSqft": 89.82,
      "totalWorkstation": 8982.41
    }
  },
  "Swansea": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.02,
      "managementFees": 1.81,
      "netEffectiveRent": 12.67,
      "rates": 5.69,
      "softFM": 11.57,
      "totalSqft": 64.45,
      "totalWorkstation": 6444.87
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.59,
      "managementFees": 1.51,
      "netEffectiveRent": 8.42,
      "rates": 3.04,
      "softFM": 11.57,
      "totalSqft": 61.82,
      "totalWorkstation": 6182.18
    }
  },
  "Swindon": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.29,
      "managementFees": 1.69,
      "netEffectiveRent": 19.8,
      "rates": 9.23,
      "softFM": 11.53,
      "totalSqft": 75.23,
      "totalWorkstation": 7523.2
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.92,
      "managementFees": 1.49,
      "netEffectiveRent": 12.67,
      "rates": 6.66,
      "softFM": 11.53,
      "totalSqft": 69.96,
      "totalWorkstation": 6996.12
    }
  },
  "Uxbridge": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 23.29,
      "managementFees": 2.11,
      "netEffectiveRent": 33.25,
      "rates": 10.16,
      "softFM": 11.86,
      "totalSqft": 91.84,
      "totalWorkstation": 9183.92
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 27.85,
      "managementFees": 1.81,
      "netEffectiveRent": 21.0,
      "rates": 7.3,
      "softFM": 11.86,
      "totalSqft": 80.99,
      "totalWorkstation": 8099.49
    }
  },
  "Warrington": {
    "new": {
      "annualisedCosts": 10.69,
      "hardFM": 22.21,
      "managementFees": 1.6,
      "netEffectiveRent": 21.0,
      "rates": 7.9,
      "softFM": 11.57,
      "totalSqft": 74.97,
      "totalWorkstation": 7497.17
    },
    "old": {
      "annualisedCosts": 10.69,
      "hardFM": 26.82,
      "managementFees": 1.45,
      "netEffectiveRent": 14.85,
      "rates": 5.1,
      "softFM": 11.57,
      "totalSqft": 70.48,
      "totalWorkstation": 7047.88
    }
  },
  "Watford": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 22.48,
      "managementFees": 2.14,
      "netEffectiveRent": 40.5,
      "rates": 13.37,
      "softFM": 11.86,
      "totalSqft": 101.51,
      "totalWorkstation": 10151.34
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 27.02,
      "managementFees": 1.98,
      "netEffectiveRent": 27.47,
      "rates": 13.26,
      "softFM": 11.86,
      "totalSqft": 92.77,
      "totalWorkstation": 9276.65
    }
  },
  "Woking": {
    "new": {
      "annualisedCosts": 11.16,
      "hardFM": 22.32,
      "managementFees": 2.1,
      "netEffectiveRent": 37.13,
      "rates": 15.39,
      "softFM": 11.86,
      "totalSqft": 99.97,
      "totalWorkstation": 9996.76
    },
    "old": {
      "annualisedCosts": 11.17,
      "hardFM": 26.82,
      "managementFees": 1.73,
      "netEffectiveRent": 23.6,
      "rates": 13.3,
      "softFM": 11.86,
      "totalSqft": 88.48,
      "totalWorkstation": 8847.74
    }
  }
};
