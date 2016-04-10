import expect from 'expect';
import { portfolioInputs } from 'reducers/portfolioInputs';
import initialState from 'store/initialState'
import * as actionTypes from 'actions/actionTypes'

describe('portfolioInputs reducer:', () => {
  const initialStateSection = initialState.portfolioInputs;
  it('should return the initial state', () => {
    expect(
      portfolioInputs(initialStateSection, {})
    ).toEqual(initialStateSection);
  });

  it('should handle UPDATE_START_MONTH', () => {
    const stateAfterUpdate = {
      ...initialStateSection,
      startMonth: "february"
    };
    const action = {
      type: actionTypes.UPDATE_START_MONTH,
      payload: {
        month: "february"
      }
    };
    expect(
      portfolioInputs(initialStateSection, action)
    ).toEqual(stateAfterUpdate);
  });
});
