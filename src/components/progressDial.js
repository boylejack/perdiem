import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  textWrapper: {
    width: 200,
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  dialText: {
    margin: 0,
    color: 'white',
  },
  fabProgress: {
    color: grey[50],
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
}));

export default function ProgressDial() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <h2 className={classes.dialText}>&pound;3.25</h2>
          <p className={classes.dialText}>Per Day</p>
        </div>
        <CircularProgress variant="static" value={80} size={200} className={classes.fabProgress} />
      </div>
      <h3>4 Days Left</h3>
    </div>
  );
}
