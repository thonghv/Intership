import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBModalFooter } from 'mdbreact';
class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      id: '',
      firstname : '',
      lastname : '',
      address : '',
      phone : '',
      email : '',
    }
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  onChange = (event) => {
    var target= event.target;
    var name= target.name;
    var value= target.value;
    this.setState({
      [name] : value
    });
    
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
  }
  onClear = () => {
    this.setState({
      modal: !this.state.modal,
      id: '',
      firstname : '',
      lastname : '',
      address : '',
      phone : '',
      email : '',
    })
  }
  render() {
  return (
    <form onSubmit={ this.onSubmit }>
    <MDBContainer>
    <MDBBtn onClick={this.toggle}>ADD</MDBBtn>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalBody>
        <MDBRow>
        <MDBCol>
            <p className="h2 text-center mb-4">ADD FORM</p>
            <label htmlFor="defaultFormRegisterNameEx" 
            className="grey-text">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.onChange}
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" 
            className="grey-text">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.onChange}
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" 
            className="grey-text">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.onChange}
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" 
            className="grey-text">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={this.state.phone}
              onChange={this.onChange}
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterNameEx" 
            className="grey-text">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.onChange}
              id="defaultFormRegisterNameEx"
              className="form-control"
            />        
        </MDBCol>
      </MDBRow>
    </MDBModalBody>
        <MDBModalFooter >
        <MDBBtn color="primary" type="submit" >Add</MDBBtn>
          <MDBBtn color="primary" onClick={() => this.onClear()} >Close</MDBBtn>
        </MDBModalFooter>
    </MDBModal>
    </MDBContainer>
    </form>
  );
};
}
export default Form;