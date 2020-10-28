import { combineReducers } from 'redux';
import datesReducer from './Dates/dates.reducer';
import moneyReducer from './Money/money.reducer';

const rootReducer = combineReducers({
  dates: datesReducer,
  money: moneyReducer,
});

export default rootReducer;
