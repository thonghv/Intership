import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import './../index.css';

class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            giatri: null
        }
    }   
onToggle = () => {
    this.setState({
        modal1: !this.state.modal1
    });
}
buttonadd= ()=> {
    this.props.add(this.state.giatri)
    this.setState({
        modal1: !this.state.modal1
    });
}

onChange = (event) => {
    this.setState({
        [event.target.name]:event.target.value
    })
    var item = {}
    item.ID = this.state.ID
    item.FirstName = this.state.FirstName
    item.LastName = this.state.LastName
    item.Address = this.state.Address
    item.Phone = this.state.Phone
    item.Email = this.state.Email
    this.setState({
        giatri : item
    })
    // console.log(this.state.giatri)
    
}
render() {
    return (
      <MDBContainer>
          <h1 align="center" style={{color: 'red'}}>Quản lý danh sách học sinh</h1>
            <MDBBtn rounded onClick={()=>this.onToggle()}>ADD</MDBBtn>
            <MDBModal isOpen={this.state.modal1} >
            <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" >Sign in</MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
            <label htmlFor="formGroupExampleInput">ID</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    onChange={(event) => this.onChange(event) }
                                    name="ID"
                                />
                                <label htmlFor="formGroupExampleInput">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    onChange={(event) => this.onChange(event) }
                                   name="FirstName"
                                />
                                <label htmlFor="formGroupExampleInput">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    onChange={(event) => this.onChange(event) }
                                    name="LastName"
                                />
                                <label htmlFor="formGroupExampleInput">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    onChange={(event) => this.onChange(event) }
                                    name="Address"
                                />
                                <label htmlFor="formGroupExampleInput">Phone</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    onChange={(event) => this.onChange(event) }
                                    name="Phone"
                                />
                                <label htmlFor="formGroupExampleInput">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="formGroupExampleInput"
                                    onChange={(event) => this.onChange(event) }
                                    name="Email"
                                />
            </form>
            </MDBModalBody>
                <MDBModalFooter className="justify-content-center">
                    <MDBBtn onClick={this.onToggle}>Cancel</MDBBtn>
                    <MDBBtn onClick={()=>this.buttonadd()}>Save</MDBBtn>
                </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
            // </td>
            // </tr>
    );
  }
}

export default ModalPage;