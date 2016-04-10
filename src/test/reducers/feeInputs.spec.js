import expect from 'expect';
import { feeInputs } from 'reducers/feeInputs';
import initialState from 'store/initialState'
import * as actionTypes from 'actions/actionTypes'

describe('feeInputs reducer:', () => {
  const initialStateSection = initialState.portfolioInputs;
  it('should return the initial state', () => {
    expect(
      feeInputs(initialStateSection, {})
    ).toEqual(initialStateSection);
  });

  it('should handle UPDATE_FEE_PERCENT_OF_PORTFOLIO', () => {
    const stateAfterUpdate = {
      ...initialStateSection,
      percentOfPortfolioFee: 1.35
    };
    const action = {
      type: actionTypes.UPDATE_FEE_PERCENT_OF_PORTFOLIO,
      payload: {
        percentOfPortfolioFee: 1.35
      }
    };
    expect(
      feeInputs(initialStateSection, action)
    ).toEqual(stateAfterUpdate);
  });
});
