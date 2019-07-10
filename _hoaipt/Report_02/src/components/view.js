
import React, { Component } from 'react';
import { MDBTable, MDBTableHead } from 'mdbreact';

class View extends Component {
    render() {

        var { detail } = this.props;
        console.log(detail)
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
                        </tr>
                            
                    <tr>
                        <td>{detail.ID}</td>
                        <td>{detail.FirstName}</td>
                        <td>{detail.LastName}</td>
                        <td>{detail.Address}</td>
                        <td>{detail.Phone}</td>
                        <td>{detail.Email}</td>                        
                    </tr>
                    </MDBTableHead>
                </MDBTable>
                
            </div>
        );
    }
}

export default View;
