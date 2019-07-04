import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import Moment from 'react-moment';
import Loader from "../../UI/Loader";
import withSearch from "../../HOC/WithSearch";

class Contacts extends Component {
    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.state = {data: [], isLoading: true, search: props.search };
        fetch('http://192.168.1.8:8080/contacts', {
          method: 'GET',
          mode: 'cors'
        })
        .then(res => res.json())
        .then(res => this.setState({data: res, isLoading: false}));
    }
    onRowClick(rowData, rowMeta){
      window.location = '/contacts/' + this.state.data[rowMeta.dataIndex].id;
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
                  return <Moment format="MM-DD-YYYY">{date}</Moment>
                },
                filterType: 'textField',
              }
            },
           ];


        return(
          <div>
            <MUIDataTable
                title={"Contacts"}
                data={this.state.data}
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
                }}
            />
          </div>
        );
    }
}

export default withSearch(Contacts);
