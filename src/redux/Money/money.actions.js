import { ADD_EXPENSE, REMOVE_EXPENSE, ADD_STARTING_BALANCE } from './money.types';

export const addExpense = (value, expenseType) => ({
  type: ADD_EXPENSE,
  payload: { value, expenseType },
});

export const removeExpense = (value, expenseType) => ({
  type: REMOVE_EXPENSE,
  payload: { value, expenseType },
});

export const addStartingBalance = (value) => ({
  type: ADD_STARTING_BALANCE,
  payload: value,
});
