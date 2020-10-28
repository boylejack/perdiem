import { ADD_START_DATE, ADD_END_DATE } from './dates.types';

const INITIAL_STATE = {
  startDate: '',
  endDate: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_START_DATE:
      return {
        ...state, startDate: action.payload,
      };

    case ADD_END_DATE:
      return {
        ...state, endDate: action.payload,
      };
    default: return state;
  }
};

export default reducer;
