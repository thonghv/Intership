import React, { Component } from 'react';
import { MDBBtn, MDBBtnGroup, MDBCol, MDBRow, } from "mdbreact";
import { Link } from 'react-router-dom'
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon } from 'mdbreact';
class Rowdata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            modal2: false,
            giatri : null
        }
    }   

    onToggle = () => {
        this.props.edit(this.props.index, this.state.giatri);
        this.setState({
            modal1: !this.state.modal1,
        });
    }
    buttondelete = () => {
        this.setState({
        modal2: !this.state.modal2,
        });
    }
    delete1 = () =>{
        this.props.delete(this.props.index);
        this.setState({
            modal2: !this.state.modal2
        })
    }

    onChange = () => {
        const full = document.getElementsByClassName('form-control');
        const arr = [...full].map(input => input.value);
        var item = {}
        item.ID = arr[0]
        item.FirstName = arr[1]
        item.LastName = arr[2]
        item.Address = arr[3]
        item.Phone = arr[4]
        item.Email = arr[5]
        this.setState({
            giatri : item
        })
    }

    render() {
        var { data } = this.props;
        return (
            <tr>
                <td>{this.props.index+1}</td>
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
                                <MDBBtn color="blue" onClick={() => this.onToggle()}>Edit</MDBBtn>
                                <MDBBtn color="black" onClick={() =>  this.buttondelete() }>Delete</MDBBtn>
                            </MDBBtnGroup>
                        </MDBCol>
                    </MDBRow>
                    <MDBModal className="modal-notify modal-info text-white" isOpen={this.state.modal2} >
                        <MDBModalHeader className="text-center" titleClass="w-100" tag="p">
                            DELETE
                        </MDBModalHeader>
                        <MDBModalBody className="text-center">
                            <MDBIcon icon="bell" size="4x" className="animated rotateIn mb-4" />
                            <p>Do you want to delete this student?</p>
                        </MDBModalBody>
                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn color="primary" onClick={this.delete1}>OK</MDBBtn>
                            <MDBBtn color="primary" outline  onClick={this.buttondelete}>CANCEL</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                    <MDBModal isOpen={this.state.modal1}>
                        <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold">Edit</MDBModalHeader>
                        <MDBModalBody>
                            <form className="mx-3 grey-text">
                                <label htmlFor="formGroupExampleInput">ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='full'
                                    id="formGroupExampleInput"
                                    defaultValue={this.props.data.ID}
                                    onChange={ this.onChange }
                                />
                                <label htmlFor="formGroupExampleInput">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='full'
                                    id="formGroupExampleInput"
                                    defaultValue={this.props.data.FirstName}
                                    onChange={ this.onChange }
                                />
                                <label htmlFor="formGroupExampleInput">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='full'
                                    id="formGroupExampleInput"
                                    defaultValue={this.props.data.LastName}
                                    onChange={ this.onChange }
                                />
                                <label htmlFor="formGroupExampleInput">Address</label>
                                <input
                                    type="text"
                                    name='full'
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    defaultValue={this.props.data.Address}
                                    onChange={ this.onChange }
                                />
                                <label htmlFor="formGroupExampleInput">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='full'
                                    id="formGroupExampleInput"
                                    defaultValue={this.props.data.Phone}
                                    onChange={ this.onChange }
                                />
                                <label htmlFor="formGroupExampleInput">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='full'
                                    id="formGroupExampleInput"
                                    defaultValue={this.props.data.Email}
                                    onChange={ this.onChange }
                                />
                            </form>
                        </MDBModalBody>
                        <MDBModalFooter className="justify-content-center">
                            <MDBBtn onClick={this.onToggle}>Cancel</MDBBtn>
                            <MDBBtn onClick={()=>{this.onToggle()}}>Save</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </td>

            </tr>
        );
    }
}

export default Rowdata;