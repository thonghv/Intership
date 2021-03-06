import React, { Component } from 'react';
import { MDBModal, MDBBtn, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
class EditForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            ID:{
                value:this.props.studentFromTable.ID,
                valid:true
            },
            FirstName:{
                value:this.props.studentFromTable.FirstName,
                valid:true
            },
            LastName:{
                value:this.props.studentFromTable.LastName,
                valid:true
            },
            Address:{
                value:this.props.studentFromTable.Address,
                valid:true
            },
            Phone:{
                value:this.props.studentFromTable.Phone,
                valid:true
            },
            Email:{
                value:this.props.studentFromTable.Email,
                valid:true
            },
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
        // this.setState({
        //     [event.target.name]:event.target.value
        // })
    }
    clickSave = () => {
        var item = {}
        item.ID = this.state.ID.value
        item.FirstName = this.state.FirstName.value
        item.LastName = this.state.LastName.value
        item.Address = this.state.Address.value
        item.Phone = this.state.Phone.value
        item.Email = this.state.Email.value
        if(this.state.Phone.valid === true && this.state.Email.valid === true){
            this.props.getStudentFromTable(item)
            this.props.changeStatusEditForm(!this.props.statusEditForm)
            this.props.onNotification(true,2)
        }
    }
    displayErrowEmail = () => {
        if(!this.state.Email.valid){
          return(
            <div className="invalid-feedback">Please provide a valid email.</div>
          )
        }
      }
    render() {
        return (
            <div>
                <MDBModal isOpen={this.props.statusEditForm} toggle={(status) => this.props.changeStatusEditForm(!this.props.statusEditForm)}>
                    <MDBModalHeader toggle={(status) => this.props.changeStatusEditForm(!this.props.statusEditForm)}>Edit Form</MDBModalHeader>
                    <MDBModalBody>
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">ID
                        </label>
                        <input 
                        className="form-control"
                        defaultValue={this.props.studentFromTable.ID} 
                        name="ID" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your ID"
                        autoComplete="off" 
                        required
                        disabled />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">First Name
                        </label>
                        <input 
                        className="form-control" 
                        defaultValue={this.props.studentFromTable.FirstName}
                        name="FirstName" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your First Name" 
                        autoComplete="off"
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Last Name
                        </label>
                        <input 
                        className="form-control"
                        defaultValue={this.props.studentFromTable.LastName} 
                        name="LastName" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Last Name" 
                        autoComplete="off"
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Phone
                        </label>
                        <input 
                        className={this.state.Phone.valid ? "form-control" : "form-control is-invalid"}
                        defaultValue={this.props.studentFromTable.Phone} 
                        name="Phone" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Phone" 
                        autoComplete="off"
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
                        defaultValue={this.props.studentFromTable.Address}
                        name="Address" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Address" 
                        autoComplete="off"
                        required />
                        <label 
                        htmlFor="defaultFormRegisterNameEx" 
                        className="grey-text">Email
                        </label>
                        <input 
                        className={this.state.Email.valid ? "form-control" : "form-control is-invalid"} 
                        defaultValue={this.props.studentFromTable.Email}
                        name="Email" 
                        onChange={(event) => this.toChange(event)} 
                        type="text" 
                        id="defaultFormRegisterNameEx" 
                        placeholder="Enter Your Email" 
                        autoComplete="off"
                        required />
                        {this.displayErrowEmail()}
                    </MDBModalBody>
                    <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={() => this.props.changeStatusEditForm(!this.props.statusEditForm)}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={() => this.clickSave()}>Save</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default EditForm;