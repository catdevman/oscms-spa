import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { getCurrentUser } from '../../../actions';
import Grid from '@material-ui/core/Grid';
import SettingsIcon from '@material-ui/icons/Settings';
import { NavLink as Link } from "react-router-dom";
import gravatar from 'gravatar';
const styles = theme => ({
  link: {
      textDecoration: 'none',
  },
});

class ProfileMenu extends Component {
  constructor(props){
    super(props);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {anchorEl: null, open: false};
  }

  handleMenu(event) {
    this.setState({anchorEl: event.currentTarget, open: true});
  }

  handleClose() {
    this.setState({anchorEl: null, open: false});
  }

  componentWillMount(){
    this.props.getCurrentUser();
  }
  render(){
    const { classes } = this.props;
    const { attributes } = this.props.user;
    return (
      <React.Fragment>
      <Grid item>
        <Link to="/profile" onClick={this.handleClose} className={classes.link}>
          <Avatar
          onClick={this.handleMenu}
          src={gravatar.url(attributes? attributes.email : '', {d: 'retro'})}
          />
        </Link>
        </Grid>
        <div style={{minWidth:10}}></div>
        <Grid item>
        <Link to="/settings" onClick={this.handleClose} className={classes.link}>
          <SettingsIcon color="secondary" fontSize="large" />
        </Link>
        </Grid>
        </React.Fragment>
    );
  }
}


function mapStateToProps(state){
  return {
    user: state.user.info
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps,{getCurrentUser})
)(ProfileMenu);
