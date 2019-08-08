import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBModal, MDBModalBody, MDBBtnGroup } from 'mdbreact';
class FormEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      id: '',
      firstname : '',
      lastname : '',
      address : '',
      phone : '',
      email :'',
    }
  }
  componentWillMount(){
    if(this.props.taskEditing){
      this.setState({
      id : this.props.taskEditing.id,
      firstname : this.props.taskEditing.firstname,
      lastname : this.props.taskEditing.lastname,
      address : this.props.taskEditing.address,
      phone : this.props.taskEditing.phone,
      email : this.props.taskEditing.email,

      })
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
    this.toggle();
    event.preventDefault();
    this.props.onSubmit(this.state);
    
  }
  onClear = () => {
    this.setState({
      modal: !this.state.modal,
      id : this.props.taskEditing.id,
      firstname : this.props.taskEditing.firstname,
      lastname : this.props.taskEditing.lastname,
      address : this.props.taskEditing.address,
      phone : this.props.taskEditing.phone,
      email : this.props.taskEditing.email,
    })
  }
  
  onEdit = () =>{
    this.props.onEdit(this.props.task.id);
  }
  render() {
  return (
    <form onSubmit={ this.onSubmit }>
    <MDBContainer>
      <MDBBtn color="primary" onClick={this.toggle}>Edit</MDBBtn>
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
          <MDBBtnGroup>
          <MDBBtn color="primary" type='submit'>Save</MDBBtn>
          &nbsp;
          <MDBBtn color="primary" onClick={() => this.onClear()} >Close</MDBBtn>
          </MDBBtnGroup>
      </MDBModal>
    </MDBContainer>
    </form>
  );
};
}
export default FormEdit;