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
    componentWillMount(){
      this.props.getPlots()
        .then(() => this.setState({isLoading: false}));
    }
    onRowClick(rowData, rowMeta){
      window.location = '/plots/' + this.props.plots[rowMeta.dataIndex].id;
    }
    render(){
        let columns = [];
        if(this.props.plots){
          columns = [
            {
              name: "owners",
              label: "Owners",
              options: {
                filterOptions: {
                  names: _.uniq(_.flatten(this.props.plots.map(data => data.owners.map(owner => owner.name)))),
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
  return {plots: state.plots.all }
}

export default connect(mapStateToProps, {getPlots})(withSearch(Plots));
