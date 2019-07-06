import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Loader from "../../UI/Loader";
import { getPlot } from '../../../actions';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

class PlotDetails extends Component {
    constructor(props){
        super(props);
        this.state = { isLoading: true };
    }
    componentWillMount(){
        this.props.getPlot(this.props.match.params.id)
        .then(() => this.setState({isLoading: false}));
    }
    render(){

        return(
            this.state.isLoading || !this.props.plot ? <Loader /> :
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                <TextField
                    fullWidth
                    label="ID"
                    defaultValue={this.props.plot.id}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                    readOnly: true,
                    }}
                />
                </Grid>
                <Grid item xs={12} lg={6}>
                <TextField
                    multiline
                    fullWidth
                    label="Owners"
                    defaultValue={this.props.plot.owners.map((owner) => owner.name).join('\n')}
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
                    label="Status"
                    defaultValue={this.props.plot.status}
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

function mapStateToProps(state){
    return {
        plot: state.plots.plot
    };
}

export default connect(mapStateToProps, {getPlot})(PlotDetails);
