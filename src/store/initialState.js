'use strict'
/**
 * Maybe this should be split up between the reducers, but I like the idea of
 * having the entire state tree in one place
 */

const initialState = {
  portfolioInputs: {
    startMonth: "january",
    startYear: "2015",
    endMonth: "january",
    endYear: "2015",
    moneyInvestedInPeriod: 0,
    percentStock: 100,
    totalValue: 0
  },
  feeInputs: {
    percentageOfPortfolioFee: 1, // (null if not charged this way)
    flatAmountFee: 100, // (null otherwise)
    averageExpenseRatio: 1.10
  }
};

export default initialState
