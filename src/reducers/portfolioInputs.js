import { UPDATE_START_MONTH, UPDATE_START_YEAR, UPDATE_END_MONTH,
  UPDATE_END_YEAR, UPDATE_MONEY_INVESTED_IN_PERIOD, UPDATE_INVESTMENT_BREAKDOWN,
  UPDATE_PORTFOLIO_VALUE } from '../actions/actionTypes'
import initialState from '../store/initialState'

// TODO: right way to handle nesting and initial state?

export function portfolioInputs(state = initialState.portfolioInputs, action) {
  switch (action.type) {
    case UPDATE_START_MONTH:
      return {
        ...state,
        startMonth: action.payload.month
      };

    case UPDATE_START_YEAR:
      return {
        ...state,
        startYear: action.payload.year
      };

    case UPDATE_END_MONTH:
      return {
        ...state,
        endMonth: action.payload.month
      };

    case UPDATE_END_YEAR:
      return {
        ...state,
        endYear: action.payload.year
      };

    case UPDATE_MONEY_INVESTED_IN_PERIOD:
      return {
        ...state,
        amount: action.payload.amount
      };

    case UPDATE_INVESTMENT_BREAKDOWN:
      return {
        ...state,
        percentStocks: action.payload.percentStocks
      };

    case UPDATE_PORTFOLIO_VALUE:
      return {
        ...state,
        value: action.payload.value
      };
    default:
      return state;
  }
}