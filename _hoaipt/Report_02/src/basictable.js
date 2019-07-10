import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Rowdata from './components/rowdata';
import InputPage from './components/Fragment';
import { MDBBtn, MDBBtnGroup, MDBCol, MDBRow,  } from "mdbreact";
import { Link } from 'react-router-dom'
class BasicTable extends Component {
    deleteproduct=(id)=>{
        var arrdata=this.props.data;
        arrdata.splice(id,1);
        this.setState({ data : arrdata});
    }
    render() {

        var {data} = this.props;
        var result = data.map((value, index) => {
            return <Rowdata 
                        key={index} 
                        index={index}
                        data={value}
                        showView={(item) => this.props.showView(value) }
                        delete={(id)=>{this.deleteproduct(id)}}
                        detail={ this.props.detail }
                    />
        })

        return (
                <div>
                <MDBTable>
                <MDBTableHead color="primary-color" textWhite>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                       {result}
                </MDBTableBody>
                </MDBTable>
                </div>
            
        );
    }
}

export default BasicTable;


