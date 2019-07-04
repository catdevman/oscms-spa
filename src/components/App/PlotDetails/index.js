import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from "../../UI/Loader";

class PlotDetails extends Component {
    constructor(props){
        super(props);
        this.state = {data: {}, isLoading: true };
        fetch(`http://192.168.1.8:8080/plots/${props.match.params.id}` , {
          method: 'GET',
          mode: 'cors'
        })
        .then(res => res.json())
        .then(res => this.setState({data: res, isLoading: false}));
    }
    render(){

        return(
            this.state.isLoading ? <Loader /> :
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                {this.state.data.id}
                </Grid>
                <Grid item xs={12} lg={6}>
                {this.state.data.owners.map(owner => <div key={owner.id}>{owner.name}<br/></div>)}
                </Grid>
            </Grid>

        );
    }
}

export default PlotDetails;
