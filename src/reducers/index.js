import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { items } from './items';  // todo delete
import { portfolioInputs } from './portfolioInputs';
import { feeInputs } from './feeInputs';

const rootReducer = combineReducers({
  form: formReducer,
  /* your reducers */
  items, // todo delete
  portfolioInputs,
  feeInputs
});

export default rootReducer;
