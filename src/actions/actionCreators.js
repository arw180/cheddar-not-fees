import * as actions from "actionTypes";

// TODO: Should argument to actions be wrapped in a payload object?

// #############################################################################
//                              Portfolio Input
// #############################################################################
/**
 * Update the starting month of the analysis
 * @param {string} month - e.g. august
 * @returns {{type, payload: {month: *}}}
 */
export function updateStartMonth(month) {
    return {
        type: actions.UPDATE_START_MONTH,
        payload: {"month": month}
    }
}

/**
 * Update the starting year of the analysis
 * @param {string} year - e.g. 2015
 * @returns {{type, payload: {year: *}}}
 */
export function updateStartYear(year) {
    return {
        type: actions.UPDATE_START_YEAR,
        payload: {"year": year}
    }
}

/**
 * Update the ending month of the analysis
 * @param {string} month - e.g. august
 * @returns {{type, payload: {month: *}}}
 */
export function updateEndMonth(month) {
    return {
        type: actions.UPDATE_END_MONTH,
        payload: {"month": month}
    }
}

/**
 * Update the ending year of the analysis
 * @param {string} year - e.g. 2015
 * @returns {{type, payload: {year: *}}}
 */
export function updateEndYear(year) {
    return {
        type: actions.UPDATE_END_YEAR,
        payload: {"year": year}
    }
}

/**
 * Update amount of money invested in the given period
 * @param {number} amount - amount invested during period in US Dollars
 * @returns {{type, payload: {amount: *}}}
 */
export function updateMoneyInvestedInPeriod(amount) {
    return {
        type: actions.UPDATE_MONEY_INVESTED_IN_PERIOD,
        payload: {"amount": amount}
    }
}

/**
 * Update the investment breakdown (how much of the portfolio is stocks vs
 *  bonds)
 * @param {number} percentStocks - percentage of portfolio made up of stocks
 * @returns {{type, payload: {percentStocks: *}}}
 */
export function updateInvestmentBreakdown(percentStocks) {
    return {
        type: actions.UPDATE_INVESTMENT_BREAKDOWN,
        payload: {"percentStocks": percentStocks}
    }
}

/**
 * Update the total portfolio value
 * @param {number} value - total value of portfolio in US Dollars
 * @returns {{type, payload: {value: *}}}
 */
export function updatePortfolioValue(value) {
    return {
        type: actions.UPDATE_PORTFOLIO_VALUE,
        payload: {"value": value}
    }
}

// #############################################################################
//                              Fee Input
// #############################################################################
/**
 * Update the fee charged based on the value of the portfolio
 * @param {number} percentOfPortfolioFee - a percentage fee based on the value
 *  of the portfolio
 * @returns {{type, payload: {percentOfPortfolioFee: *}}}
 */
export function updatePortfolioPercentageFee(percentOfPortfolioFee) {
    return {
        type: actions.UPDATE_FEE_PERCENT_OF_PORTFOLIO,
        payload: {"percentOfPortfolioFee": percentOfPortfolioFee}
    }
}

/**
 * Update the flat fee charged for a portfolio
 * @param {number} flatFee - the flat fee charge for a portfolio
 * @returns {{type, payload: {flatFee: *}}}
 */
export function updateFlatFee(flatFee) {
    return {
        type: actions.UPDATE_FEE_FLAT_AMOUNT,
        payload: {"flatFee": flatFee}
    }
}

/**
 * Update the average expense ratio of the funds in the portfolio
 * @param {number} avgExpenseRatio - avg expense ratio of all funds in portfolio
 * @returns {{type, payload: {avgExpenseRatio: *}}}
 */
export function updateAverageExpenseRatio(avgExpenseRatio) {
    return {
        type: actions.UPDATE_FEE_AVG_EXPENSE_RATIO,
        payload: {"avgExpenseRatio": avgExpenseRatio}
    }
}