import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Plots from './Plots';
import PlotDetails from './PlotDetails';
import Profile from './Profile';
import Contacts from './Contacts';
import ContactDetails from './ContactDetails';
import ProfileMenu from './ProfileMenu';
import CemeterySelector from './CemeterySelector';
import Nav from './Nav';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import signUpConfig from '../../config/signUpConfig.json';
import { withAuthenticator } from 'aws-amplify-react';
import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  toolbar: theme.mixins.toolbar,
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
});

class App extends Component {
  constructor(props){
    super(props);
    this.state = {open: false, cemetery: null};
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
      this.setState({ open: false });
  }

  render(){
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: this.state.open,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, this.state.open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            OSCMS
          </Typography>
          <CemeterySelector />
          <ProfileMenu />
        </Toolbar>
      </AppBar>
      <Nav open={this.state.open} handleDrawerClose={this.handleDrawerClose}/>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: this.state.open,
        })}>
        <div className={classes.drawerHeader} />

        <Route path="/" exact component={Dashboard} />
        <Route path="/plots" exact component={Plots} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="/plots/:id" component={PlotDetails} />
        <Route path="/contacts/:id" component={ContactDetails} />
      </main>
      </div>
  );
      }
}

export default withStyles(styles)(withAuthenticator(
  App
// export default withStyles(styles)(App); // Remove authentication to work offline
, { signUpConfig }));
