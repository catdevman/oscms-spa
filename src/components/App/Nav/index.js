import React, { Component } from 'react';
import { NavLink as Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChatIcon from '@material-ui/icons/Chat';
import ContactsIcon from '@material-ui/icons/Contacts';


const drawerWidth = 240;
const styles = theme => ({
    root: {
      display: 'flex',
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: theme.palette.secondary.light
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    toolbar: theme.mixins.toolbar,
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main
    },
  });
class Nav extends Component {

    render(){
    const {classes, open, handleDrawerClose} = this.props;
    return (
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      <Divider />
        <List>
            <Link onClick={handleDrawerClose} to="/" className={classes.link}>
                <ListItem button>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>
            <Link onClick={handleDrawerClose} to="/plots" className={classes.link}>
                <ListItem button>
                    <ListItemIcon><ChatIcon /></ListItemIcon>
                    <ListItemText primary="Plots" />
                </ListItem>
            </Link>

            <Link onClick={handleDrawerClose} to="/contacts" className={classes.link}>
                <ListItem button>
                    <ListItemIcon><ContactsIcon /></ListItemIcon>
                    <ListItemText primary="Contacts" />
                </ListItem>
            </Link>
        </List>
      </Drawer>
      );
    }
}

export default  withStyles(styles)(Nav);
