import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import Moment from 'react-moment';
import Loader from "../../UI/Loader";
import { getContacts } from '../../../actions/index';
import { connect } from 'react-redux';
import { compose } from 'redux';

class Contacts extends Component {
    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.state = { isLoading: true, search: props.search };
    }
    componentWillMount(){
      this.props.getContacts().then(() => this.setState({isLoading: false}));
    }
    onRowClick(rowData, rowMeta){
      window.location = '/contacts/' + this.props.contacts[rowMeta.dataIndex].id;
    }
    render(){
        const columns = [
          {
            name: "firstName",
            label: "First",
          },
          {
            name: "lastName",
            label: "Last",
          },
          {
            name: "dob",
            label: "DOB",
            options: {
              customBodyRender: function(date){
                return <Moment format="YYYYMMDD">{date}</Moment>
              },
              filterType: 'textField',
            }
          },
        ];


        return(
            <MUIDataTable
                title={"Contacts"}
                data={this.props.contacts}
                columns={columns}
                options={{
                    searchText: this.state.search,
                    selectableRows:'none',
                    onRowClick: this.onRowClick,
                    textLabels: {
                      body: {
                          noMatch: this.state.isLoading ?
                              <Loader /> :
                              'Sorry, there is no matching data to display',
                      },
                    },
                    print: false,
                }}
            />
        );
    }
}

function mapStateToProps(state){
  return {
    contacts: state.contacts.all
  }
}

export default compose(
  connect(mapStateToProps, {getContacts}),
  // withSearch
)(Contacts);
