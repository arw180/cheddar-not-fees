'use strict'
/**
 * This file might end up being strictly for documentation, but I wanted to
 * see all the state in once place
 */

const initialState = {
  portfolioInput: {
    start_month: "june",
    start_year: "2013",
    end_month: "june",
    end_year: "2014",
    money_invested_in_period: 10000,
    percent_stock: 85,
    total_value: 120000
  },
  fees: {
    percentage_of_portfolio: 1.2, // (null if not charged this way)
    flat_amount: 1000, // (null otherwise)
    average_expense_ratio: 0.87
  }
};


