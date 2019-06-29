import React, {Component} from 'react';
import MUIDataTable from "mui-datatables";

class Contacts extends Component {
    constructor(props){
        super(props);
        this.onRowClick = this.onRowClick.bind(this);
        this.data = [
           { id: 1, firstName: "Lucas", lastName: "Pearson" },
           { id: 2, firstName: "Faith", lastName: "Pearson" },
           { id: 3, firstName: "Tim", lastName: "Pearson" },
           { id: 4, firstName: "Barb", lastName: "Pearson" },
           { id: 5, firstName: "Amanda", lastName: "Norris" },
           { id: 6, firstName: "Kyle", lastName: "Norris" },
          ];
    }
    onRowClick(rowData, rowMeta){
      console.log(this.data[rowMeta.dataIndex]);
      window.location = '/contacts/' + this.data[rowMeta.dataIndex].id;
    }
    render(){
        const columns = [
            {
             name: "firstName",
             label: "First Name",
            },
            {
             name: "lastName",
             label: "Last Name",
            },
           ];


        return(
          <div>
            <MUIDataTable
                title={"Contacts"}
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

export default Contacts;
