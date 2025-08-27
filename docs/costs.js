const COSTS = {
  "Aberdeen": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 23.99,
      "managementFees": 2.03,
      "netEffectiveRent": 30.06,
      "rates": 10.44,
      "softFM": 11.78,
      "totalSqft": 88.21,
      "totalWorkstation": 8820.56
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 28.16,
      "managementFees": 1.74,
      "netEffectiveRent": 20.17,
      "rates": 8.95,
      "softFM": 11.78,
      "totalSqft": 80.7,
      "totalWorkstation": 8070.12
    }
  },
  "Basingstoke": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.58,
      "managementFees": 1.87,
      "netEffectiveRent": 31.35,
      "rates": 13.32,
      "softFM": 11.82,
      "totalSqft": 91.69,
      "totalWorkstation": 9169.29
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.09,
      "managementFees": 1.57,
      "netEffectiveRent": 17.33,
      "rates": 10.27,
      "softFM": 11.82,
      "totalSqft": 78.84,
      "totalWorkstation": 7884.28
    }
  },
  "Belfast": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 21.19,
      "managementFees": 1.75,
      "netEffectiveRent": 22.95,
      "rates": 11.3,
      "softFM": 11.49,
      "totalSqft": 78.59,
      "totalWorkstation": 7858.55
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 25.96,
      "managementFees": 1.58,
      "netEffectiveRent": 16.2,
      "rates": 9.3,
      "softFM": 11.49,
      "totalSqft": 74.43,
      "totalWorkstation": 7443.41
    }
  },
  "Birmingham": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.01,
      "managementFees": 2.19,
      "netEffectiveRent": 39.19,
      "rates": 15.9,
      "softFM": 11.99,
      "totalSqft": 101.18,
      "totalWorkstation": 10118.25
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.64,
      "managementFees": 1.96,
      "netEffectiveRent": 26.8,
      "rates": 10.76,
      "softFM": 11.99,
      "totalSqft": 88.06,
      "totalWorkstation": 8805.8
    }
  },
  "Bournemouth": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.57,
      "managementFees": 1.85,
      "netEffectiveRent": 27.0,
      "rates": 7.2,
      "softFM": 11.61,
      "totalSqft": 80.13,
      "totalWorkstation": 8013.14
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 27.11,
      "managementFees": 1.7,
      "netEffectiveRent": 17.85,
      "rates": 5.76,
      "softFM": 11.61,
      "totalSqft": 73.93,
      "totalWorkstation": 7393.28
    }
  },
  "Bracknell": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.43,
      "managementFees": 1.96,
      "netEffectiveRent": 26.81,
      "rates": 8.76,
      "softFM": 11.78,
      "totalSqft": 82.49,
      "totalWorkstation": 8249.26
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.89,
      "managementFees": 1.7,
      "netEffectiveRent": 19.8,
      "rates": 7.72,
      "softFM": 11.78,
      "totalSqft": 78.64,
      "totalWorkstation": 7864.41
    }
  },
  "Brighton": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.69,
      "managementFees": 2.19,
      "netEffectiveRent": 39.6,
      "rates": 10.0,
      "softFM": 11.91,
      "totalSqft": 97.15,
      "totalWorkstation": 9714.88
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.16,
      "managementFees": 1.94,
      "netEffectiveRent": 29.75,
      "rates": 9.72,
      "softFM": 11.91,
      "totalSqft": 91.24,
      "totalWorkstation": 9123.78
    }
  },
  "Bristol": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.42,
      "managementFees": 2.27,
      "netEffectiveRent": 40.4,
      "rates": 11.79,
      "softFM": 11.95,
      "totalSqft": 98.74,
      "totalWorkstation": 9873.66
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.95,
      "managementFees": 2.05,
      "netEffectiveRent": 36.75,
      "rates": 9.98,
      "softFM": 11.95,
      "totalSqft": 97.59,
      "totalWorkstation": 9758.7
    }
  },
  "Cambridge": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.18,
      "managementFees": 2.72,
      "netEffectiveRent": 61.75,
      "rates": 19.93,
      "softFM": 11.74,
      "totalSqft": 129.08,
      "totalWorkstation": 12908.12
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.73,
      "managementFees": 2.23,
      "netEffectiveRent": 37.0,
      "rates": 17.1,
      "softFM": 11.74,
      "totalSqft": 105.56,
      "totalWorkstation": 10556.32
    }
  },
  "Cardiff": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.0,
      "managementFees": 1.77,
      "netEffectiveRent": 24.03,
      "rates": 9.7,
      "softFM": 11.7,
      "totalSqft": 79.1,
      "totalWorkstation": 7910.3
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.53,
      "managementFees": 1.51,
      "netEffectiveRent": 17.17,
      "rates": 9.11,
      "softFM": 11.7,
      "totalSqft": 75.93,
      "totalWorkstation": 7593.13
    }
  },
  "Crawley": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.39,
      "managementFees": 1.84,
      "netEffectiveRent": 33.25,
      "rates": 11.39,
      "softFM": 11.74,
      "totalSqft": 91.36,
      "totalWorkstation": 9136.4
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.93,
      "managementFees": 1.67,
      "netEffectiveRent": 24.75,
      "rates": 10.29,
      "softFM": 11.74,
      "totalSqft": 86.14,
      "totalWorkstation": 8613.74
    }
  },
  "Croydon": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.72,
      "managementFees": 2.15,
      "netEffectiveRent": 37.19,
      "rates": 15.75,
      "softFM": 11.61,
      "totalSqft": 100.18,
      "totalWorkstation": 10018.18
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.09,
      "managementFees": 1.91,
      "netEffectiveRent": 28.44,
      "rates": 14.18,
      "softFM": 11.61,
      "totalSqft": 93.99,
      "totalWorkstation": 9398.96
    }
  },
  "Edinburgh": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 24.3,
      "managementFees": 2.38,
      "netEffectiveRent": 43.32,
      "rates": 13.02,
      "softFM": 11.91,
      "totalSqft": 104.83,
      "totalWorkstation": 10483.17
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 28.54,
      "managementFees": 1.97,
      "netEffectiveRent": 30.06,
      "rates": 11.6,
      "softFM": 11.91,
      "totalSqft": 93.99,
      "totalWorkstation": 9399.21
    }
  },
  "Exeter": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.09,
      "managementFees": 1.81,
      "netEffectiveRent": 23.13,
      "rates": 7.2,
      "softFM": 11.82,
      "totalSqft": 75.96,
      "totalWorkstation": 7595.67
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.58,
      "managementFees": 1.7,
      "netEffectiveRent": 19.89,
      "rates": 5.35,
      "softFM": 11.82,
      "totalSqft": 75.24,
      "totalWorkstation": 7524.13
    }
  },
  "Farnborough": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.3,
      "managementFees": 1.94,
      "netEffectiveRent": 22.0,
      "rates": 11.59,
      "softFM": 11.86,
      "totalSqft": 80.44,
      "totalWorkstation": 8044.16
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.73,
      "managementFees": 1.69,
      "netEffectiveRent": 30.94,
      "rates": 9.26,
      "softFM": 11.86,
      "totalSqft": 91.25,
      "totalWorkstation": 9124.55
    }
  },
  "Glasgow": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 24.2,
      "managementFees": 2.06,
      "netEffectiveRent": 35.62,
      "rates": 13.15,
      "softFM": 11.91,
      "totalSqft": 96.85,
      "totalWorkstation": 9684.83
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 28.52,
      "managementFees": 1.9,
      "netEffectiveRent": 25.75,
      "rates": 8.21,
      "softFM": 11.91,
      "totalSqft": 86.19,
      "totalWorkstation": 8619.35
    }
  },
  "Guildford": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.75,
      "managementFees": 2.19,
      "netEffectiveRent": 39.19,
      "rates": 15.07,
      "softFM": 11.86,
      "totalSqft": 101.81,
      "totalWorkstation": 10180.87
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.24,
      "managementFees": 1.77,
      "netEffectiveRent": 24.0,
      "rates": 13.81,
      "softFM": 11.86,
      "totalSqft": 89.44,
      "totalWorkstation": 8944.24
    }
  },
  "Heathrow": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 23.18,
      "managementFees": 2.15,
      "netEffectiveRent": 37.19,
      "rates": 14.63,
      "softFM": 12.07,
      "totalSqft": 99.98,
      "totalWorkstation": 9997.59
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.69,
      "managementFees": 1.9,
      "netEffectiveRent": 28.44,
      "rates": 10.91,
      "softFM": 12.07,
      "totalSqft": 91.76,
      "totalWorkstation": 9176.19
    }
  },
  "High Wycombe": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.43,
      "managementFees": 1.83,
      "netEffectiveRent": 23.51,
      "rates": 12.82,
      "softFM": 11.74,
      "totalSqft": 83.09,
      "totalWorkstation": 8309.09
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.91,
      "managementFees": 1.64,
      "netEffectiveRent": 17.33,
      "rates": 4.94,
      "softFM": 11.74,
      "totalSqft": 73.32,
      "totalWorkstation": 7331.94
    }
  },
  "Leeds": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 21.91,
      "managementFees": 2.1,
      "netEffectiveRent": 39.31,
      "rates": 11.91,
      "softFM": 11.82,
      "totalSqft": 96.95,
      "totalWorkstation": 9695.12
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.49,
      "managementFees": 1.81,
      "netEffectiveRent": 29.6,
      "rates": 9.48,
      "softFM": 11.82,
      "totalSqft": 89.11,
      "totalWorkstation": 8910.82
    }
  },
  "Leicester": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 21.73,
      "managementFees": 1.61,
      "netEffectiveRent": 19.59,
      "rates": 7.49,
      "softFM": 11.65,
      "totalSqft": 71.97,
      "totalWorkstation": 7196.88
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.33,
      "managementFees": 1.57,
      "netEffectiveRent": 15.26,
      "rates": 5.53,
      "softFM": 11.65,
      "totalSqft": 70.25,
      "totalWorkstation": 7024.89
    }
  },
  "Liverpool": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 21.9,
      "managementFees": 1.77,
      "netEffectiveRent": 25.08,
      "rates": 7.04,
      "softFM": 11.74,
      "totalSqft": 77.43,
      "totalWorkstation": 7742.91
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.47,
      "managementFees": 1.61,
      "netEffectiveRent": 16.5,
      "rates": 6.72,
      "softFM": 11.74,
      "totalSqft": 72.95,
      "totalWorkstation": 7294.92
    }
  },
  "London - City": {
    "new": {
      "annualisedCosts": 11.61,
      "hardFM": 24.07,
      "managementFees": 3.41,
      "netEffectiveRent": 80.75,
      "rates": 33.65,
      "softFM": 12.74,
      "totalSqft": 166.22,
      "totalWorkstation": 16621.77
    },
    "old": {
      "annualisedCosts": 11.61,
      "hardFM": 28.47,
      "managementFees": 2.48,
      "netEffectiveRent": 44.0,
      "rates": 23.01,
      "softFM": 12.74,
      "totalSqft": 122.31,
      "totalWorkstation": 12230.77
    }
  },
  "London - Docklands": {
    "new": {
      "annualisedCosts": 11.61,
      "hardFM": 24.14,
      "managementFees": 2.57,
      "netEffectiveRent": 43.6,
      "rates": 25.37,
      "softFM": 12.45,
      "totalSqft": 119.73,
      "totalWorkstation": 11972.96
    },
    "old": {
      "annualisedCosts": 11.61,
      "hardFM": 28.57,
      "managementFees": 1.92,
      "netEffectiveRent": 21.75,
      "rates": 17.91,
      "softFM": 12.45,
      "totalSqft": 94.2,
      "totalWorkstation": 9420.42
    }
  },
  "London - Hammersmith": {
    "new": {
      "annualisedCosts": 11.61,
      "hardFM": 24.02,
      "managementFees": 2.73,
      "netEffectiveRent": 51.75,
      "rates": 26.83,
      "softFM": 12.49,
      "totalSqft": 129.42,
      "totalWorkstation": 12942.05
    },
    "old": {
      "annualisedCosts": 11.61,
      "hardFM": 28.42,
      "managementFees": 2.19,
      "netEffectiveRent": 33.0,
      "rates": 25.24,
      "softFM": 12.49,
      "totalSqft": 112.96,
      "totalWorkstation": 11295.55
    }
  },
  "London - Midtown": {
    "new": {
      "annualisedCosts": 11.61,
      "hardFM": 24.11,
      "managementFees": 3.33,
      "netEffectiveRent": 72.19,
      "rates": 24.38,
      "softFM": 12.74,
      "totalSqft": 148.36,
      "totalWorkstation": 14835.65
    },
    "old": {
      "annualisedCosts": 11.61,
      "hardFM": 28.51,
      "managementFees": 2.62,
      "netEffectiveRent": 47.85,
      "rates": 21.32,
      "softFM": 12.74,
      "totalSqft": 124.65,
      "totalWorkstation": 12465.09
    }
  },
  "London - Southbank": {
    "new": {
      "annualisedCosts": 11.61,
      "hardFM": 24.02,
      "managementFees": 3.28,
      "netEffectiveRent": 70.13,
      "rates": 33.35,
      "softFM": 12.49,
      "totalSqft": 154.88,
      "totalWorkstation": 15488.32
    },
    "old": {
      "annualisedCosts": 11.61,
      "hardFM": 28.44,
      "managementFees": 2.53,
      "netEffectiveRent": 42.9,
      "rates": 23.91,
      "softFM": 12.49,
      "totalSqft": 121.88,
      "totalWorkstation": 12188.21
    }
  },
  "London - West End Core": {
    "new": {
      "annualisedCosts": 11.61,
      "hardFM": 24.3,
      "managementFees": 4.95,
      "netEffectiveRent": 148.75,
      "rates": 58.64,
      "softFM": 12.78,
      "totalSqft": 261.03,
      "totalWorkstation": 26102.51
    },
    "old": {
      "annualisedCosts": 11.61,
      "hardFM": 28.71,
      "managementFees": 3.19,
      "netEffectiveRent": 72.25,
      "rates": 53.27,
      "softFM": 12.78,
      "totalSqft": 181.82,
      "totalWorkstation": 18181.66
    }
  },
  "London - West End Non Core": {
    "new": {
      "annualisedCosts": 11.61,
      "hardFM": 23.96,
      "managementFees": 3.85,
      "netEffectiveRent": 93.5,
      "rates": 48.96,
      "softFM": 12.78,
      "totalSqft": 194.65,
      "totalWorkstation": 19465.49
    },
    "old": {
      "annualisedCosts": 11.61,
      "hardFM": 28.37,
      "managementFees": 2.99,
      "netEffectiveRent": 59.5,
      "rates": 31.3,
      "softFM": 12.78,
      "totalSqft": 146.54,
      "totalWorkstation": 14654.32
    }
  },
  "Luton": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.34,
      "managementFees": 2.11,
      "netEffectiveRent": 23.93,
      "rates": 8.12,
      "softFM": 11.68,
      "totalSqft": 78.94,
      "totalWorkstation": 7893.67
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.89,
      "managementFees": 1.93,
      "netEffectiveRent": 22.5,
      "rates": 7.9,
      "softFM": 11.68,
      "totalSqft": 81.66,
      "totalWorkstation": 8166.28
    }
  },
  "Maidenhead": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.49,
      "managementFees": 2.22,
      "netEffectiveRent": 43.31,
      "rates": 17.23,
      "softFM": 11.65,
      "totalSqft": 107.65,
      "totalWorkstation": 10765.13
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.98,
      "managementFees": 1.93,
      "netEffectiveRent": 25.58,
      "rates": 12.9,
      "softFM": 11.65,
      "totalSqft": 89.8,
      "totalWorkstation": 8979.72
    }
  },
  "Maidstone": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.49,
      "managementFees": 1.84,
      "netEffectiveRent": 30.06,
      "rates": 9.87,
      "softFM": 11.61,
      "totalSqft": 86.62,
      "totalWorkstation": 8662.25
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.04,
      "managementFees": 1.63,
      "netEffectiveRent": 18.56,
      "rates": 8.87,
      "softFM": 11.61,
      "totalSqft": 78.46,
      "totalWorkstation": 7846.25
    }
  },
  "Manchester": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.27,
      "managementFees": 2.36,
      "netEffectiveRent": 41.63,
      "rates": 15.88,
      "softFM": 11.78,
      "totalSqft": 103.82,
      "totalWorkstation": 10382.14
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.91,
      "managementFees": 2.03,
      "netEffectiveRent": 29.75,
      "rates": 11.43,
      "softFM": 11.78,
      "totalSqft": 91.81,
      "totalWorkstation": 9181.06
    }
  },
  "Milton Keynes": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.4,
      "managementFees": 1.87,
      "netEffectiveRent": 33.25,
      "rates": 7.62,
      "softFM": 11.78,
      "totalSqft": 87.68,
      "totalWorkstation": 8767.58
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.98,
      "managementFees": 1.75,
      "netEffectiveRent": 25.44,
      "rates": 5.66,
      "softFM": 11.78,
      "totalSqft": 82.37,
      "totalWorkstation": 8237.13
    }
  },
  "Newcastle": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.03,
      "managementFees": 1.92,
      "netEffectiveRent": 30.4,
      "rates": 11.27,
      "softFM": 11.49,
      "totalSqft": 87.01,
      "totalWorkstation": 8701.33
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.59,
      "managementFees": 1.79,
      "netEffectiveRent": 24.05,
      "rates": 9.97,
      "softFM": 11.49,
      "totalSqft": 83.79,
      "totalWorkstation": 8378.88
    }
  },
  "Northampton": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 21.97,
      "managementFees": 1.72,
      "netEffectiveRent": 20.25,
      "rates": 6.7,
      "softFM": 11.4,
      "totalSqft": 71.94,
      "totalWorkstation": 7193.74
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.55,
      "managementFees": 1.49,
      "netEffectiveRent": 15.75,
      "rates": 5.65,
      "softFM": 11.4,
      "totalSqft": 70.75,
      "totalWorkstation": 7074.71
    }
  },
  "Norwich": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 21.6,
      "managementFees": 1.53,
      "netEffectiveRent": 16.5,
      "rates": 7.02,
      "softFM": 11.4,
      "totalSqft": 67.96,
      "totalWorkstation": 6796.06
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.23,
      "managementFees": 1.43,
      "netEffectiveRent": 13.2,
      "rates": 5.67,
      "softFM": 11.4,
      "totalSqft": 67.84,
      "totalWorkstation": 6783.73
    }
  },
  "Nottingham": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 21.85,
      "managementFees": 1.78,
      "netEffectiveRent": 24.06,
      "rates": 7.26,
      "softFM": 11.4,
      "totalSqft": 76.26,
      "totalWorkstation": 7625.86
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.47,
      "managementFees": 1.6,
      "netEffectiveRent": 16.5,
      "rates": 4.48,
      "softFM": 11.4,
      "totalSqft": 70.36,
      "totalWorkstation": 7035.93
    }
  },
  "Oxford": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.54,
      "managementFees": 2.95,
      "netEffectiveRent": 60.13,
      "rates": 11.06,
      "softFM": 12.07,
      "totalSqft": 119.51,
      "totalWorkstation": 11950.73
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.11,
      "managementFees": 2.26,
      "netEffectiveRent": 43.94,
      "rates": 11.02,
      "softFM": 12.07,
      "totalSqft": 107.15,
      "totalWorkstation": 10715.16
    }
  },
  "Portsmouth": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.19,
      "managementFees": 1.96,
      "netEffectiveRent": 32.38,
      "rates": 10.23,
      "softFM": 11.7,
      "totalSqft": 89.22,
      "totalWorkstation": 8921.64
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.76,
      "managementFees": 1.75,
      "netEffectiveRent": 20.63,
      "rates": 10.17,
      "softFM": 11.7,
      "totalSqft": 81.77,
      "totalWorkstation": 8177.42
    }
  },
  "Preston": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 21.88,
      "managementFees": 1.63,
      "netEffectiveRent": 17.5,
      "rates": 4.81,
      "softFM": 11.7,
      "totalSqft": 67.43,
      "totalWorkstation": 6743.08
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.49,
      "managementFees": 1.39,
      "netEffectiveRent": 9.63,
      "rates": 3.25,
      "softFM": 11.7,
      "totalSqft": 62.36,
      "totalWorkstation": 6236.45
    }
  },
  "Reading": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.42,
      "managementFees": 2.19,
      "netEffectiveRent": 46.2,
      "rates": 15.59,
      "softFM": 11.74,
      "totalSqft": 108.89,
      "totalWorkstation": 10889.39
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.03,
      "managementFees": 1.93,
      "netEffectiveRent": 23.1,
      "rates": 10.82,
      "softFM": 11.74,
      "totalSqft": 85.37,
      "totalWorkstation": 8537.28
    }
  },
  "Richmond": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.98,
      "managementFees": 2.83,
      "netEffectiveRent": 56.25,
      "rates": 24.51,
      "softFM": 11.91,
      "totalSqft": 129.24,
      "totalWorkstation": 12923.55
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.47,
      "managementFees": 2.47,
      "netEffectiveRent": 44.55,
      "rates": 22.18,
      "softFM": 11.91,
      "totalSqft": 119.34,
      "totalWorkstation": 11933.93
    }
  },
  "Sheffield": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.13,
      "managementFees": 1.85,
      "netEffectiveRent": 29.45,
      "rates": 9.12,
      "softFM": 11.61,
      "totalSqft": 84.06,
      "totalWorkstation": 8406.25
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.46,
      "managementFees": 1.58,
      "netEffectiveRent": 18.5,
      "rates": 5.45,
      "softFM": 11.61,
      "totalSqft": 73.51,
      "totalWorkstation": 7350.98
    }
  },
  "Slough": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.59,
      "managementFees": 2.13,
      "netEffectiveRent": 31.97,
      "rates": 13.74,
      "softFM": 11.91,
      "totalSqft": 93.09,
      "totalWorkstation": 9309.35
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.18,
      "managementFees": 1.61,
      "netEffectiveRent": 20.63,
      "rates": 9.35,
      "softFM": 11.91,
      "totalSqft": 81.44,
      "totalWorkstation": 8143.97
    }
  },
  "Southampton": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.32,
      "managementFees": 2.11,
      "netEffectiveRent": 32.38,
      "rates": 12.27,
      "softFM": 11.74,
      "totalSqft": 91.58,
      "totalWorkstation": 9158.22
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.89,
      "managementFees": 1.91,
      "netEffectiveRent": 24.94,
      "rates": 10.17,
      "softFM": 11.74,
      "totalSqft": 86.41,
      "totalWorkstation": 8641.38
    }
  },
  "St Albans": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.41,
      "managementFees": 2.34,
      "netEffectiveRent": 39.31,
      "rates": 15.16,
      "softFM": 11.82,
      "totalSqft": 101.8,
      "totalWorkstation": 10179.56
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.99,
      "managementFees": 2.03,
      "netEffectiveRent": 33.73,
      "rates": 14.64,
      "softFM": 11.82,
      "totalSqft": 99.96,
      "totalWorkstation": 9996.11
    }
  },
  "Staines": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.42,
      "managementFees": 2.15,
      "netEffectiveRent": 34.2,
      "rates": 17.42,
      "softFM": 11.86,
      "totalSqft": 98.8,
      "totalWorkstation": 9880.5
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.01,
      "managementFees": 1.9,
      "netEffectiveRent": 23.1,
      "rates": 14.78,
      "softFM": 11.86,
      "totalSqft": 89.41,
      "totalWorkstation": 8941.35
    }
  },
  "Swansea": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.02,
      "managementFees": 1.81,
      "netEffectiveRent": 12.67,
      "rates": 5.69,
      "softFM": 11.57,
      "totalSqft": 63.66,
      "totalWorkstation": 6366.16
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.59,
      "managementFees": 1.51,
      "netEffectiveRent": 8.42,
      "rates": 3.04,
      "softFM": 11.57,
      "totalSqft": 61.03,
      "totalWorkstation": 6103.46
    }
  },
  "Swindon": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.29,
      "managementFees": 1.69,
      "netEffectiveRent": 19.8,
      "rates": 9.23,
      "softFM": 11.53,
      "totalSqft": 74.44,
      "totalWorkstation": 7444.48
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.92,
      "managementFees": 1.49,
      "netEffectiveRent": 12.67,
      "rates": 6.66,
      "softFM": 11.53,
      "totalSqft": 69.17,
      "totalWorkstation": 6917.4
    }
  },
  "Uxbridge": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 23.29,
      "managementFees": 2.11,
      "netEffectiveRent": 33.25,
      "rates": 10.16,
      "softFM": 11.86,
      "totalSqft": 91.43,
      "totalWorkstation": 9142.87
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.85,
      "managementFees": 1.81,
      "netEffectiveRent": 21.0,
      "rates": 7.3,
      "softFM": 11.86,
      "totalSqft": 80.58,
      "totalWorkstation": 8058.44
    }
  },
  "Warrington": {
    "new": {
      "annualisedCosts": 9.9,
      "hardFM": 22.21,
      "managementFees": 1.6,
      "netEffectiveRent": 21.0,
      "rates": 7.9,
      "softFM": 11.57,
      "totalSqft": 74.18,
      "totalWorkstation": 7418.45
    },
    "old": {
      "annualisedCosts": 9.91,
      "hardFM": 26.82,
      "managementFees": 1.45,
      "netEffectiveRent": 14.85,
      "rates": 5.1,
      "softFM": 11.57,
      "totalSqft": 69.69,
      "totalWorkstation": 6969.16
    }
  },
  "Watford": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.48,
      "managementFees": 2.14,
      "netEffectiveRent": 40.5,
      "rates": 13.37,
      "softFM": 11.86,
      "totalSqft": 101.1,
      "totalWorkstation": 10110.29
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 27.02,
      "managementFees": 1.98,
      "netEffectiveRent": 27.47,
      "rates": 13.26,
      "softFM": 11.86,
      "totalSqft": 92.36,
      "totalWorkstation": 9235.59
    }
  },
  "Woking": {
    "new": {
      "annualisedCosts": 10.75,
      "hardFM": 22.32,
      "managementFees": 2.1,
      "netEffectiveRent": 37.13,
      "rates": 15.39,
      "softFM": 11.86,
      "totalSqft": 99.56,
      "totalWorkstation": 9955.71
    },
    "old": {
      "annualisedCosts": 10.76,
      "hardFM": 26.82,
      "managementFees": 1.73,
      "netEffectiveRent": 23.6,
      "rates": 13.3,
      "softFM": 11.86,
      "totalSqft": 88.07,
      "totalWorkstation": 8806.69
    }
  }
};
