import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="center" spacing={3}>
      <Grid item xs={3}> 
        <CircularProgress className={classes.progress} />
      </Grid>
    </Grid>
  );
}
