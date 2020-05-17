import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import Loader from "../../UI/Loader";
import withSearch from "../../HOC/WithSearch";
import _ from 'lodash';
import { getPlots } from '../../../actions/index';
import { connect } from 'react-redux';

class Plots extends Component {
    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.state = { isLoading: true, search: props.search };
    }
    UNSAFE_componentWillMount(){
      this.props.getPlots()
        .then(() => this.setState({isLoading: false}));
    }
    onRowClick(rowData, rowMeta){
      window.location = '/plots/' + this.props.plots[rowMeta.dataIndex].id;
    }
    render(){
        let columns = []; 
        if(this.props.plots.length > 0){
          this.props.plots.map(data => {
            data.location = `${data.section}-${data.plot}-${data.marker}`
            return data
          });
          columns = [
            {
              name: "location",
              label: "Location",
              options: {
                filter: false
              }
            },
            {
              name: "owners.items",
              label: "Owners",
              options: {
                filterOptions: {
                  names: _.uniq(_.flatten(this.props.plots.map(data => data.owners.items.map(d => d.owner.name)))),
                  logic(owners, filters) {
                    return owners.filter(data => filters.indexOf(data.owner.name)>=0).length === 0;
                  },
                },
                customBodyRender: function(owners, tableMeta){
                  owners = owners ? owners.map(data => data.owner.name) : [];
                  const fullText = owners.join(", ");
                  return <div title={fullText}>{ fullText.length > 25 ? fullText.substring(0,25) + "...": fullText}</div>
                },
              }
            },
            {
              name: "occupants.items",
              label: "Occupants",
              options: {
                filterOptions: {
                  names: _.uniq(_.flatten(this.props.plots.map(data => data.occupants.items.map(d => d.name)))),
                  logic(occupants, filters) {
                    return occupants.filter(data => filters.indexOf(data.name)>=0).length === 0;
                  },
                },
                customBodyRender: function(occupants, tableMeta){
                  occupants = occupants ? occupants.map(data => data.name) : [];
                  const fullText = occupants.join(", ");
                  return <div title={fullText}>{ fullText.length > 25 ? fullText.substring(0,25) + "...": fullText}</div>
                },
              }
            },
            {
              name: "status",
              label: "Status",
            },
            {
              name: "section",
              label: "Section",
              options: {
                display: false
              },
            },
            {
              name: "plot",
              label: "Plot",
              options: {
                display: false
              },
            },
            {
              name: "marker",
              label: "Grave",
              options: {
                display: false
              },
            },
          ];
        }

        return(
          <div>
            <MUIDataTable
                title={"Plots"}
                data={this.props.plots}
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
                    print: false,
                }}
            />
          </div>
        );
    }
}

function mapStateToProps(state){
  return {plots: state.plots.all}
}

export default connect(mapStateToProps, {getPlots})(withSearch(Plots));
