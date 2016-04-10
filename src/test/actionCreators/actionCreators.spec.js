import expect from 'expect';
import * as actionTypes from 'actions/actionTypes'
import * as actionCreators from 'actions/actionCreators'

describe('actionCreators:', () => {

  it('should handle UPDATE_START_MONTH', () => {
    const action = {
      type: actionTypes.UPDATE_START_MONTH,
      payload: {
        month: "march"
      }
    };
    expect(
      actionCreators.updateStartMonth("march")
    ).toEqual(action);
  });
});