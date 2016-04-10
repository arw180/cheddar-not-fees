import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { portfolioInputs } from './portfolioInputs';
import { feeInputs } from './feeInputs';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  portfolioInputs,
  feeInputs
});

export default rootReducer;
