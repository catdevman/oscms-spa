import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getCurrentUser, getCemeteries } from '../../../actions';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Loader from '../../UI/Loader';

class Profile extends Component{
  constructor(props){
      super(props);
      this.state = { isLoading: true };
  }

  UNSAFE_componentWillMount(){
    this.props.getCurrentUser().then(() => {
      this.setState({isLoading: false})
    });
  }
  render(){
    const { user: { attributes}, cemetery } = this.props;
    console.log(cemetery);
    const cemeteryName = cemetery?? "";
    console.log(cemeteryName);
    return this.state.isLoading || !this.props.user ? <Loader /> :
    <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
        <TextField
            fullWidth
            label="Email"
            defaultValue={attributes['email']}
            margin="normal"
            variant="outlined"
            InputProps={{
            readOnly: true,
            }}
        />
        <TextField
            fullWidth
            label="First Name"
            defaultValue={attributes['given_name']}
            margin="normal"
            variant="outlined"
            InputProps={{
            readOnly: true,
            }}
        />
        <TextField
            fullWidth
            label="Last Name"
            defaultValue={attributes['family_name']}
            margin="normal"
            variant="outlined"
            InputProps={{
            readOnly: true,
            }}
        />
        <TextField
            fullWidth
            label="Cemetery Name"
            defaultValue={cemeteryName}
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
    user: state.user.info,
    cemetery: state.cemeteries.cemetery
  };
}

export default connect(mapStateToProps,{getCurrentUser, getCemeteries})(Profile);
