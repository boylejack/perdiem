import { ADD_START_DATE, ADD_END_DATE } from './dates.types';

export const addStartDate = (date) => ({
  type: ADD_START_DATE,
  payload: date,
});

export const addEndDate = (date) => ({
  type: ADD_END_DATE,
  payload: date,
});
