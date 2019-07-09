import React, { Component } from 'react';
import { MDBModal, MDBBtn, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
class EditForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            ID:this.props.studentFromTable.ID,
            FirstName:this.props.studentFromTable.FirstName,
            LastName:this.props.studentFromTable.LastName,
            Address:this.props.studentFromTable.Address,
            Phone:this.props.studentFromTable.Phone,
            Email:this.props.studentFromTable.Email,
        }
    }
    toChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    clickSave = () => {
        var item = {}
        item.ID = this.state.ID
        item.FirstName = this.state.FirstName
        item.LastName = this.state.LastName
        item.Address = this.state.Address
        item.Phone = this.state.Phone
        item.Email = this.state.Email
        this.props.getStudentFromTable(item)
        this.props.changeStatusEditForm(!this.props.statusEditForm)
        this.props.onNotification(true,2)
    }
    render() {
        return (
            <div>
                <MDBModal isOpen={this.props.statusEditForm} toggle={(status) => this.props.changeStatusEditForm(!this.props.statusEditForm)}>
                    <MDBModalHeader toggle={(status) => this.props.changeStatusEditForm(!this.props.statusEditForm)}>Edit Form</MDBModalHeader>
                    <MDBModalBody>
                        <div className="form-group">
                            <input type="email" defaultValue={this.props.studentFromTable.ID} className="form-control" name="ID" placeholder="ID" />
                        </div>
                        <div className="form-group">
                            <input type="email" defaultValue={this.props.studentFromTable.FirstName} className="form-control" name="FirstName" onChange={(event) => this.toChange(event)} placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" defaultValue={this.props.studentFromTable.LastName} className="form-control" name="LastName" onChange={(event) => this.toChange(event)} placeholder="Last Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" defaultValue={this.props.studentFromTable.Address} className="form-control" name="Address" onChange={(event) => this.toChange(event)} placeholder="Address" />
                        </div>
                        <div className="form-group">
                            <input type="email" defaultValue={this.props.studentFromTable.Phone} className="form-control" name="Phone" onChange={(event) => this.toChange(event)} placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <input type="email" defaultValue={this.props.studentFromTable.Email} className="form-control" name="Email" onChange={(event) => this.toChange(event)} placeholder="Email" />
                        </div>
                    </MDBModalBody>
                    <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={(status) => this.props.changeStatusEditForm(!this.props.statusEditForm)}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={() => this.clickSave()}>Save</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default EditForm;