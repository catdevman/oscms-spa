import React from 'react';
import AvailablePlots from './AvailablePlots';
import UnsoldPlots from './UnsoldPlots';
import Grid from '@material-ui/core/Grid';

function Dashboard() {
  return (
    <React.Fragment>
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
            <AvailablePlots/>
            </Grid>
            <Grid item xs={12} lg={6}>
            <UnsoldPlots/>
            </Grid>
        </Grid>
   </React.Fragment>
  );
}

export default Dashboard;
