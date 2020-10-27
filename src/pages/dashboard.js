import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ProgressDial from '../components/progressDial';

const useStyles = makeStyles(() => ({
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  bottomNav: {
    paddingBottom: 10,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <h1>Per Diem</h1>
      <ProgressDial />
      <div className={classes.bottomNav}>
        <Link to="/home" className={classes.link}>
          <Button variant="contained">
            Add Expense
          </Button>
        </Link>
      </div>
    </>
  );
}
