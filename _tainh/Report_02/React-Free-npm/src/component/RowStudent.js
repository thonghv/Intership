import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import { MDBBtn, MDBBtnGroup } from 'mdbreact';
class RowStudent extends Component {
    clickEdit = () => {
        this.props.getStudentFromTable();
        this.props.changeStatusEditForm(!this.props.statusEditForm)
    }
    clickDelete = () => {
        this.props.getIdFormDelete()
        this.props.changeStatusDeleteForm(!this.props.statusDeleteForm)
    }
    render() {
        return (
            <tr>  
                <Link to={"/detail." + this.props.id}><td>{this.props.id}</td></Link>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.address}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.email}</td>
                <td>
                < MDBBtnGroup size="sm">
                        <MDBBtn color="warning" onClick={() => this.clickEdit()}>Edit</MDBBtn>
                        <MDBBtn color="danger" onClick={() => this.clickDelete()}>Delete</MDBBtn>
                        <Link to={"/detail." + this.props.id}><MDBBtn color="info">View</MDBBtn></Link>
                    </MDBBtnGroup>
                </td>
            </tr>
        );
    }
}

export default RowStudent;