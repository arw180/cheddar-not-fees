import expect from 'expect';
import initialState from 'store/initialState'
import {calculatePerformance} from 'utils/analysis';


describe('analysis:', () => {
  it('should calculate the analysis', () => {
    let state = initialState;
    state.portfolioInputs.startMonth = "january";
    state.portfolioInputs.startYear = "2015";
    state.portfolioInputs.endMonth = "june";
    state.portfolioInputs.endYear = "2015";

    const analysisResults = calculatePerformance(state);
    expect(
      analysisResults.managerPerformance
    ).toExist();
  });
});