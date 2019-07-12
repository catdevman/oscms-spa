import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getCurrentUser } from '../../../actions';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Loader from '../../UI/Loader';


class Profile extends Component{
  constructor(props){
      super(props);
      this.state = { isLoading: true };
  }

  componentWillMount(){
    this.props.getCurrentUser().then(() => {
      this.setState({isLoading: false})
    });
  }
  render(){
    const { attributes } = this.props.user;
    return this.state.isLoading || !this.props.user ? <Loader /> :
    <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
        <TextField
            fullWidth
            label="Cemetery ID"
            defaultValue={attributes['custom:cemetery_id']}
            margin="normal"
            variant="outlined"
            InputProps={{
            readOnly: true,
            }}
        />
        </Grid>
    </Grid>
  }
};

function mapStateToProps(state){
  return {
    user: state.user.info
  };
}

export default connect(mapStateToProps,{getCurrentUser})(Profile);
