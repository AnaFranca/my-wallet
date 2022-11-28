import { combineReducers } from 'redux';

import transactions from './transactions/reducer';
import currencies from './currencies/reducer';

export default combineReducers({
  transactions,
  currencies,
});
