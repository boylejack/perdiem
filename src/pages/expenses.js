import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ExpenseTable from '../components/expenseTable';

const useStyles = makeStyles(() => ({
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  bottomNav: {
    paddingBottom: 10,
  },
}));

export default function Expenses() {
  const classes = useStyles();

  return (
    <>
      <h1>Expenses List</h1>
      <div>
        <ExpenseTable />
      </div>
      <div className={classes.bottomNav}>
        <Link to="/">
          <Button variant="contained">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </>
  );
}
