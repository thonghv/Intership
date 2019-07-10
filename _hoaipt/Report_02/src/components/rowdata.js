import React, { Component, Fragment } from 'react';
import { MDBBtn, MDBBtnGroup, MDBCol, MDBRow, } from "mdbreact";
import { Link } from 'react-router-dom'
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter } from 'mdbreact';
import InputPage from './Fragment';

class Rowdata extends Component {
    state = {
        modal1: false,
        item: null
    }

    onToggle = () => {
        this.props.showView()
        var { detail } = this.props;
        this.setState({
            modal1: !this.state.modal1,
            item : detail
        });
        console.log(this.state.item)
    }
    Edit = () => {
        this.setState({ editing: true });
    }
    buttondelete = () => {
        this.props.delete(this.props.index);
    }



    render() {
        var { data } = this.props;
        return (
            <tr>
                <td>{data.ID}</td>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.Address}</td>
                <td>{data.Phone}</td>
                <td>{data.Email}</td>
                <td>
                    <MDBRow>
                        <MDBCol md='12' className="mb-4">
                            <MDBBtnGroup size="sm">
                                <Link to='/view' >
                                    <MDBBtn color="unique" onClick={(item) => this.props.showView(item)}>veiw</MDBBtn>
                                </Link>
                                <MDBBtn color="blue" onClick={this.onToggle}>Edit</MDBBtn>
                                <MDBBtn color="black" onClick={() => { this.buttondelete() }}>Delete</MDBBtn>
                            </MDBBtnGroup>
                        </MDBCol>
                    </MDBRow>
                    <MDBModal isOpen={this.state.modal1}>
                        <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold">Edit</MDBModalHeader>
                        <MDBModalBody>
                            <form className="mx-3 grey-text">
                                <MDBInput label='ID' validate />
                                <MDBInput label="First Name" validate />
                                <MDBInput label="Last Name" validate />
                                <MDBInput label="Address" validate />
                                <MDBInput label="Phone" validate />
                                <MDBInput label="Email" validate />
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn onClick={this.onToggle}>Cancel</MDBBtn>
                            <MDBBtn onClick={this.onToggle}>Save</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </td>

            </tr>
        );
    }
}

export default Rowdata;