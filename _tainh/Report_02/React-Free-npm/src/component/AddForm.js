import React, { Component } from 'react';
import {MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, } from 'mdbreact';
class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: {
                value:"",
                valid: true
              },
              FirstName: {
                value:"",
                valid: true
              },
              LastName: {
                value:"",
                valid: true
              },
              Address: {
                value:"",
                valid: true
              },
              Phone: {
                value:"",
                valid: true
              },
              Email: {
                value:"",
                valid: true
              }
        }
    }

    toChange = (event) => {
        var valid
        switch(event.target.name){
          case "Email":
            var reEmail = /^[a-zA-Z0-9]+[.]{0,1}[a-zA-Z0-9]+[@][a-z]+([.][a-z]{2,})+$/
            var testEmail = reEmail.test(event.target.value)
            if(testEmail){
              valid = true
            }else{
              valid = false
            }
            break
          case "Phone":
              var rePhone = /^[0][0-9]{1,9}$/
              var testPhone = rePhone.test(event.target.value)
              if(testPhone){
                if(event.target.value.length === 10){
                  valid = true
                }else{
                  valid = false
                }
              }else{
                valid = false
              }
              break
        }
        this.setState({ [event.target.name]: { value: event.target.value, valid: valid } });
    }

    submitHandler = event => {
        event.preventDefault();
        var student = {}
        student.ID = this.state.ID.value
        student.FirstName = this.state.FirstName.value
        student.LastName = this.state.LastName.value
        student.Address = this.state.Address.value
        student.Phone = this.state.Phone.value
        student.Email = this.state.Email.value
        if(this.state.Phone.valid === true && this.state.Email.valid === true){
          this.props.getDataFormAdd(student)
          this.props.changeStatusAddForm(!this.props.statusAddForm)
          this.props.onNotification(true,1)
        }
    }

    displayErrowEmail = () => {
        if(!this.state.Email.valid){
            return(
            <div className="invalid-feedback">Please provide a valid email.</div>
            )
        }
    }

    resetForm = () => {
        this.setState({
            Phone:{
            valid:true
            },
            Email:{
            valid:true
            }
        })
        this.props.changeStatusAddForm(!this.props.statusAddForm)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <MDBModal isOpen={this.props.statusAddForm} toggle={() => this.resetForm()}>
                    <MDBModalHeader toggle={() => this.resetForm()}>Add Form</MDBModalHeader>
                    <MDBModalBody>  
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">ID
                        </label>
                        <input 
                        className="form-control" 
                        name="ID" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your ID" 
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">First Name
                        </label>
                        <input 
                        className="form-control" 
                        name="FirstName" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your First Name" 
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Last Name
                        </label>
                        <input 
                        className="form-control" 
                        name="LastName" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Last Name" 
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Phone
                        </label>
                        <input 
                        className={this.state.Phone.valid ? "form-control" : "form-control is-invalid"} 
                        name="Phone" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Phone" 
                        required />
                        <div 
                        className="invalid-feedback">Please provide a valid phone.
                        </div>
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Address
                        </label>
                        <input 
                        className={"form-control"} 
                        name="Address" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Address" 
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Email
                        </label>
                        <input 
                        className={this.state.Email.valid ? "form-control" : "form-control is-invalid"} 
                        name="Email" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Email" 
                        required />
                        {this.displayErrowEmail()}
                    </MDBModalBody>
                    <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={() => this.resetForm()}>Close</MDBBtn>
                    <MDBBtn color="primary" type="submit">Add</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </form>
        );
    }
}

export default AddForm;