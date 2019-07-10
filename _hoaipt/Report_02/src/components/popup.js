import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter } from 'mdbreact';
import './../index.css';

class ModalPage extends Component {

toggle = (nr) => {
  let modalNumber = 'modal' + nr
//   this.setState({
//     [modalNumber]: !this.state[modalNumber]
//   });
}

render() {
  return (
      <MDBContainer>
        <MDBBtn rounded onClick={this.toggle(1)}>ADD</MDBBtn>
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
          <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle(1)}>Sign in</MDBModalHeader>
          <MDBModalBody>
            <form className="mx-3 grey-text">
              <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
              <MDBInput label="Type your password" icon="lock" group type="password" validate />
            </form>
          </MDBModalBody>
          <MDBModalFooter className="justify-content-center">
            <MDBBtn onClick={this.toggle(1)}>Cancel</MDBBtn>
            <MDBBtn onClick={this.toggle(1)}>Save</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;