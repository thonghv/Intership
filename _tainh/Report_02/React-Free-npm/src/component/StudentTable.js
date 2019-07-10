
import {MDBInput, MDBIcon, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, } from 'mdbreact';
import RowStudent from './RowStudent';
import React, { Component } from 'react';
import Pagination from './Pagination';
import AddForm from './AddForm';
import {orderBy} from 'lodash'
import sort from 'sort-objects-array'
import '../index.css'
class StudentTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      columns: [
        {
          label: 'ID',
          field: 'ID'
        },
        {
          label: 'First Name',
          field: 'FirstName'
        },
        {
          label: 'Last Name',
          field: 'LastName'
        },
        {
          label: 'Address',
          field: 'Address'
        },
        {
          label: 'Phone',
          field: 'Phone'
        },
        {
          label: 'Email',
          field: 'Email'
        },
        {
          label: 'Action',
          field: 'Action'
        }
      ],
      currentPage:1, // trang hiện tại
      studentOnPage:5, // số sinh viên trên 1 bảng
      columnSort:'',
      type: 'asc',
      changeType: {
        asc: 'desc',
        desc: 'asc'
      }
    }
  }
  
  // Sort
  handleSort = (columnName) => {
    this.setState({
      columnSort: columnName,
      type: this.state.columnSort === columnName ? this.state.changeType[this.state.type] : 'asc'
    })
  }
  // end sort

  // Pagination
  pagination = (currentPage) =>{
    this.setState({
      currentPage:currentPage
    })
  }
  nextPage = () => {
    this.setState({
      currentPage:this.state.currentPage + 1
    })
  }
  previousPage = () => {
    this.setState({
      currentPage:this.state.currentPage - 1
    })
  }
  // end pagination

  render() {
    console.log(this.state.columnSort,this.state.type)
    var indexOfLastStudent = this.state.currentPage * this.state.studentOnPage
    var indexOfFirstStudent = indexOfLastStudent - this.state.studentOnPage
    var listStudent = sort(this.props.dataStudent,this.state.columnSort,this.state.type) 
    var currentStudent = listStudent.slice(indexOfFirstStudent,indexOfLastStudent)
    return (
      <div>
        <MDBTable responsive striped>
          <MDBTableHead>
            <tr>
              {this.state.columns.map((value) => {
                return (
                  <th className="colFirst">
                    <div onClick={(columnName) => this.handleSort(value.field)}>
                      {value.label}  {value.field === 'Action' ? '' : <i className="fas fa-sort"></i>}
                    </div>
                  </th>
                )
              })}
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {
              currentStudent.map((value,key) => {
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

        <Pagination 
        studentOnPage={this.state.studentOnPage}
        totalPage={this.props.dataStudent.length}
        pagination={(currentPage) => this.pagination(currentPage)}
        nextPage={() => this.nextPage()}
        previousPage={() => this.previousPage()}
        currentPage={this.state.currentPage}></Pagination>

        <MDBBtn 
        color="primary" 
        onClick={(status) => this.props.changeStatusAddForm(!this.props.statusAddForm)}
        >Add Student</MDBBtn>
        <AddForm 
        statusAddForm={this.props.statusAddForm}
        changeStatusAddForm={(status) => this.props.changeStatusAddForm(status)}
        getDataFormAdd={(data) => this.props.getDataFormAdd(data)}
        onNotification={(statusNotification,statusContent) => this.props.onNotification(statusNotification,statusContent)}
        ></AddForm>
      </div>
    );
  }
}

export default StudentTable;