import React, { Component } from 'react';
import { getCemeteries } from '../../../actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Select from 'react-select';



class CemeterySelector extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {cemetery: null  }
  }
  componentWillMount(){
    this.props.getCemeteries();
  }
  handleChange(event) {
    console.log(event);
    this.setState({cemetery: event});
  }
  render(){
    const { classes } = this.props;
    const cemeteries = this.props.cemeteries.map(
      cemetery => { return {value: cemetery.id, label: cemetery.name}}
    );
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        padding: 20,
      }),
      control: () => ({
        // none of react-select's styles are passed to <Control />
        width: 100,
      })
    }
    return (
      <Select
        isSearchable="true"
        label="Select Cemetery"
        placeholder="Select Cemetery"
        classes={classes}
        styles={customStyles}
        options={cemeteries}
        value={this.state.cemetery}
        onChange={this.handleChange}
       />
    );
  }
}
function mapStateToProps(state){
  return {
    cemeteries: state.cemeteries.all
  };
}

export default compose(
  connect(mapStateToProps,{getCemeteries})
)(CemeterySelector);
