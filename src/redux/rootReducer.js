import { combineReducers } from 'redux';
import datesReducer from './Dates/dates.reducer';

const rootReducer = combineReducers({
  dates: datesReducer,
});

export default rootReducer;
