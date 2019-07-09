
import {MDBInput, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import RowStudent from './RowStudent';
import React, { Component } from 'react';


class StudentTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      ID: "",
      FirstName: "",
      LastName: "",
      Address: "",
      Phone: "",
      Email: ""
    }
  }
  toChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
    var student = {}
    student.ID = this.state.ID
    student.FirstName = this.state.FirstName
    student.LastName = this.state.LastName
    student.Address = this.state.Address
    student.Phone = this.state.Phone
    student.Email = this.state.Email
  }
  clickAdd = () => {
    var student = {}
    student.ID = this.state.ID
    student.FirstName = this.state.FirstName
    student.LastName = this.state.LastName
    student.Address = this.state.Address
    student.Phone = this.state.Phone
    student.Email = this.state.Email
    this.props.getDataFormAdd(student)
    this.props.changeStatusAddForm(!this.props.statusAddForm)
    this.props.onNotification(true,1)
  }
  render() {
    return (
      <div>
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
            this.props.dataStudent.map((value,key) => {
              return (
                <RowStudent 
                id={value.ID} 
                firstName={value.FirstName}
                lastName={value.LastName}
                address={value.Address}
                phone={value.Phone}
                email={value.Email}
                statusEditForm={this.props.statusEditForm}
                changeStatusEditForm={(status) => this.props.changeStatusEditForm(status)}
                getStudentFromTable={(student) => this.props.getStudentFromTable(value)}
                studentFromTable={this.props.studentFromTable}
                statusDeleteForm={this.props.statusDeleteForm}
                changeStatusDeleteForm={(status) => this.props.changeStatusDeleteForm(status)}
                getIdFormDelete={(id) => this.props.getIdFormDelete(value.ID)}
                ></RowStudent>
              )
            })
          } 
        </MDBTableBody>
      </MDBTable>
      <MDBBtn color="primary" onClick={(status) => this.props.changeStatusAddForm(!this.props.statusAddForm)}>Add Student</MDBBtn>
      <MDBModal isOpen={this.props.statusAddForm} toggle={(status) => this.props.changeStatusAddForm(!this.props.statusAddForm)}>
        <MDBModalHeader toggle={(status) => this.props.changeStatusAddForm(!this.props.statusAddForm)}>Add Form</MDBModalHeader>
        <MDBModalBody>
          <MDBInput label="ID" type="text" name="ID" onChange={(event) => this.toChange(event)}/>
          <MDBInput label="First Name" type="text" name="FirstName" onChange={(event) => this.toChange(event)}/>
          <MDBInput label="Last Name" type="text" name="LastName" onChange={(event) => this.toChange(event)}/>
          <MDBInput label="Address" type="text" name="Address" onChange={(event) => this.toChange(event)}/>
          <MDBInput label="Phone" type="text" name="Phone" onChange={(event) => this.toChange(event)}/>
          <MDBInput label="Email" type="text" name="Email" onChange={(event) => this.toChange(event)}/>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={(status) => this.props.changeStatusAddForm(!this.props.statusAddForm)}>Close</MDBBtn>
          <MDBBtn color="primary" onClick={() => this.clickAdd()}>Add</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
      </div>
    );
  }
}

export default StudentTable;
