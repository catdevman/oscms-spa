import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import Loader from "../../UI/Loader";
import withSearch from "../../HOC/WithSearch";
import _ from 'lodash';

class Plots extends Component {
    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.state = {data: [], isLoading: true, search: props.search };
        fetch('http://192.168.1.8:8080/plots', {
          method: 'GET',
          mode: 'cors'
        })
        .then(res => res.json())
        .then(res => this.setState({data: res, isLoading: false}));
    }
    onRowClick(rowData, rowMeta){
      window.location = '/plots/' + this.state.data[rowMeta.dataIndex].id;
    }
    render(){
        const columns = [
            {
             name: "owners",
             label: "Owners",
             options: {
               filterOptions: {
                 names: _.uniq(_.flatten(this.state.data.map(data => data.owners.map(owner => owner.name)))),
                 logic(owners, filters) {
                   const values = owners.filter(owner => filters.indexOf(owner.name)>=0);
                   return values.length === 0;
                 }
               },
               customBodyRender: function(owners, tableMeta){
                 owners = owners.map(owner => owner.name);
                 const fullText = owners.join(", ");
                 return <div title={fullText}>{ fullText.length > 25 ? fullText.substring(0,25) + "...": fullText}</div>
               },
             }
            },
            {
              name: "status",
              label: "Status",
            },
            {
             name: "plot",
             label: "Plot",
            },
           ];

        return(
          <div>
            <MUIDataTable
                title={"Plots"}
                data={this.state.data}
                columns={columns}
                options={{
                    searchText: this.state.search,
                    selectableRows:'none',
                    onRowClick: this.onRowClick,
                    responsive: 'scroll',
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

export default withSearch(Plots);
