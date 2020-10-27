import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import ProgressDial from './components/progressDial';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: blue[900],
    width: '100vw',
    height: '100vh',
    flexDirection: 'column',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>Per Diem</h1>
      <ProgressDial />
      <h5>Add Expense</h5>
    </div>
  );
}
