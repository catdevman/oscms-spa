import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from "../../UI/Loader";
import { getContact } from '../../../actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

import moment from 'moment';


class ContactDetails extends Component {
    constructor(props){
      super(props);
      this.state = { isLoading: true };
    }
    componentWillMount(){
      this.props.getContact(this.props.match.params.id).then(() => this.setState({isLoading: false}));
    }
    render(){
      return(
        this.state.isLoading || !this.props.contact ? <Loader />:
        <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                label="ID"
                defaultValue={this.props.contact.id}
                margin="normal"
                variant="outlined"
                InputProps={{
                  readOnly: true,
                }}
                />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField 
                  fullWidth
                  label="Name"
                  defaultValue={this.props.contact.name}
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                  />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField 
                  fullWidth
                  label="Date of Birth"
                  defaultValue={moment(this.props.contact.dob, "MM-DD-YYYY").format("MM/DD/YYYY")}
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    readOnly: true,
                  }}
                  />
            </Grid>
        </Grid>
      );
    }
}

function mapStatetoProps(state){
  return {
    contact: state.contacts.contact
  };
}

export default connect(mapStatetoProps,{getContact})(ContactDetails);
