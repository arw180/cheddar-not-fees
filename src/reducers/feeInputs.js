import {UPDATE_FEE_PERCENT_OF_PORTFOLIO, UPDATE_FEE_FLAT_AMOUNT,
  UPDATE_FEE_AVG_EXPENSE_RATIO } from '../actions/actionTypes'
import initialState from '../store/initialState'

// TODO: right way to handle nesting and initial state?

export function feeInputs(state = initialState.feeInputs, action) {
  switch (action.type) {
    case UPDATE_FEE_PERCENT_OF_PORTFOLIO:
      return {
        ...state,
        percentOfPortfolioFee: action.payload.percentOfPortfolioFee
      };

    case UPDATE_FEE_FLAT_AMOUNT:
      return {
        ...state,
        flatFee: action.payload.flatFee
      };

    case UPDATE_FEE_AVG_EXPENSE_RATIO:
      return {
        ...state,
        avgExpenseRatio: action.payload.avgExpenseRatio
      };

    default:
      return state;
  }
}
