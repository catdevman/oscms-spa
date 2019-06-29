import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";

class Plots extends Component {
    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.data =  [
            { id: 1, name: "Lucas Pearson", plot: "A-101-1" },
            { id: 2, name: "Faith Pearson", plot: "A-101-2" },
            { id: 3, name: "Tim Pearson", plot: "A-102-1" },
            { id: 4, name: "Barb Pearson", plot: "A-102-2" },
            { id: 5, name: "Amanda Norris", plot: "B-120-1" },
            { id: 6, name: "Kyle Norris", plot: "B-120-2" },
           ];
    }
    onRowClick(rowData, rowMeta){
      console.log(this.data[rowMeta.dataIndex]);
      window.location = '/plots/' + this.data[rowMeta.dataIndex].id;
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
                data={this.data}
                columns={columns}
                options={{
                    selectableRows:'none',
                    onRowClick: this.onRowClick
                }}
            />
          </div>
        );
    }
}

export default Plots;
