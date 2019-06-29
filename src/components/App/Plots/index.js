import React, {Component} from "react";
import MUIDataTable from "mui-datatables";
import Loader from "../../UI/Loader";

class Plots extends Component {
    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.state = {data: [], isLoading: true};
        fetch('http://localhost:8080/plots', {
          method: 'GET',
          mode: 'cors'
        }).then(res => res.json()).then(res => this.setState({data: res, isLoading: false}));
    }
    onRowClick(rowData, rowMeta){
      console.log(this.state.data[rowMeta.dataIndex]);
      window.location = '/plots/' + this.state.data[rowMeta.dataIndex].id;
    }
    render(){
        const columns = [
            {
             name: "name",
             label: "Name",
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

export default Plots;
