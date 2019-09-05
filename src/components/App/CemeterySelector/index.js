import React, { Component } from 'react';
import { getCemeteries, setCurrentCemetery } from '../../../actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Select from 'react-select';
import Loader from '../../UI/Loader';



class CemeterySelector extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {isLoading: true};
  }
  componentWillMount(){
    this.props.setCurrentCemetery().then(()=>{
      this.props.getCemeteries().then(() => {
        this.setState({isLoading: false});
      });
    });
  }
  handleChange(event) {
    this.props.setCurrentCemetery(event.value);
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
        minWidth: 100,
        width: 250,
      })
    }

    const cemetery = cemeteries.find(
      (c) => {
        return c.value === parseInt(this.props.cemetery, 10);
      }
    );

    return (
      this.state.isLoading ? <Loader /> :
      <Select
        isSearchable="true"
        label="Select Cemetery"
        placeholder="Select Cemetery"
        classes={classes}
        styles={customStyles}
        options={cemeteries}
        value={cemetery}
        onChange={this.handleChange}
       />
    );
  }
}
function mapStateToProps(state){
  return {
    cemeteries: state.cemeteries.all,
    cemetery: state.cemeteries.cemetery
  };
}

export default compose(
  connect(mapStateToProps,{getCemeteries, setCurrentCemetery})
)(CemeterySelector);
