import { ADD_START_DATE, ADD_END_DATE } from './dates.types';

export const resetStartDate = () => ({
  type: ADD_START_DATE,
  payload: Date.now(),
});

export const addEndDate = (date) => ({
  type: ADD_END_DATE,
  payload: date,
});
