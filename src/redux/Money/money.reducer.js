import { v4 as uuidv4 } from 'uuid';
import { ADD_EXPENSE, REMOVE_EXPENSE, ADD_STARTING_BALANCE } from './money.types';

const INITIAL_STATE = {
  expenses: [
    {
      id: uuidv4(),
      title: 'Coffee',
      value: 3.5,
      date: new Date('2020/08/16'),
    },
    {
      id: uuidv4(),
      title: 'Burger',
      value: 7.0,
      date: new Date('2020/08/17'),
    },
    {
      id: uuidv4(),
      title: 'Milkshake',
      value: 5.0,
      date: new Date('2020/08/19'),
    },
  ],
  startingBalance: 0,
  formatter: new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'GBP' }),
};

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === ADD_EXPENSE) {
    const newExpense = action.payload;
    newExpense.id = uuidv4();
    return {
      ...state, expenses: state.expenses.concat(action.payload),
    };
  } if (action.type === REMOVE_EXPENSE) {
    return {
      ...state, expenses: state.expenses.filter((x) => x.id !== action.payload.id),
    };
  } if (action.type === ADD_STARTING_BALANCE) {
    return {
      ...state, startingBalance: action.payload,
    };
  }
  return state;
};

export default reducer;
