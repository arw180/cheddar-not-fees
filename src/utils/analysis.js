'use strict';

/**
 * Validate all inputs
 * @param {object} state - the entire state tree (see store/initialState)
 */
function validateInput(state) {
  // check that all fields have values
  // check that the starting date is before the ending date
  // validate money invested during period (>= 0)
  // validate percentage stocks (0 <= x <= 100)
  // validate total portfolio value (> 0)
  // validate fee percent of portfolio (0 <= x < 100)
  // validate flat amount fee (>=0)
  // validate average expense ratio (0 <= x < 100)
}

export function calculatePerformance(state) {
  // manager performance vs index performance (as value and percent)
  // fees for manager vs index over this period
  return {
    managerPerformance: {
      deltaPercent: -2.5,
      deltaAmount: -1239,
      fees: 204
    },
    indexPerformance: {
      deltaPercent: -1.5,
      deltaAmount: -897,
      fees: 4
    }
  }
}