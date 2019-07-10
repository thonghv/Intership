import React, { Component } from "react";
import {MDBContainer } from "mdbreact";
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Nav from './component/Nav'
import HeaderHome from "./component/HeaderHome";
import DetailInformation from "./component/DetailInformation";
import HeaderDetail from "./component/HeaderDetail";
import StudentTable from "./component/StudentTable";
import EditForm from "./component/EditForm";
import DeleteForm from "./component/DeleteForm";
import Notification from "./component/Notification";
import Data from './Data.json'



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataStudent:Data,
      statusAddForm:false, //  lưu trạng thái để hiển thị form add
      statusEditForm:false, // lưu trạng thái để hiển thị form edit
      statusDeleteForm:false, // lưu trạng thái để hiển thị form delete
      studentFromTable: {}, // luu thông tin của sinh viên trên table khi kích nút edit
      statusNotification: false, // hiển thị notification
      contentNotification: {}, // luu thông tin của sinh viên vừa được kích hoạt chức năng thêm/sửa/xóa
      statusContent: 1, // phân biệt nội dung của từng thông báo cho các chức năng thêm/sửa/xóa
      idStudent: "" // lưu id của sinh viên khi kích nút delete trên table
    }
  }
  // start add student
  changeStatusAddForm(status){
    this.setState({
      statusAddForm:status
    })
  }
  getDataFormAdd = (data) => {
    var items =this.state.dataStudent
    items.push(data)
    this.setState({
      dataStudent:items,
      contentNotification:data
    })
  }
  // end add student
  //start edit student
  changeStatusEditForm(status){
    this.setState({
      statusEditForm:status
    })
  }
  getStudentFromTable = (student) => {
    this.setState({
      studentFromTable:student
    })
  }
  getDataFormEdit = (data) => {
    var items = this.state.dataStudent
    items.map((value,key) => {
      if(value.ID === data.ID){
        value.FirstName = data.FirstName
        value.LastName = data.LastName
        value.Address = data.Address
        value.Phone = data.Phone
        value.Email = data.Email
      }
    })
    this.setState({
      dataStudent:items,
      contentNotification:data
    })
  }
  displayFormEdit = () => {
    if(this.state.statusEditForm){
      return(
        <EditForm
        statusEditForm={this.state.statusEditForm}
        changeStatusEditForm={(status) => this.changeStatusEditForm(status)}
        studentFromTable={this.state.studentFromTable}
        getStudentFromTable={(student) => this.getDataFormEdit(student)}
        onNotification={(statusNotification,statusContent) => this.onNotification(statusNotification,statusContent)}
        ></EditForm>
      )
    }
  }
  // end edit student
  //start delete student
  changeStatusDeleteForm = (status) => {
    this.setState({
      statusDeleteForm:status
    })
  }
  displayFormDelete = () => {
    if(this.state.statusDeleteForm){
      return(
        <DeleteForm
        statusDeleteForm={this.state.statusDeleteForm}
        changeStatusDeleteForm={(status) => this.changeStatusDeleteForm(status)}
        deleteStudent={() => this.deleteStudent()}
        onNotification={(statusNotification,statusContent) => this.onNotification(statusNotification,statusContent)}
        ></DeleteForm>
      )
    }
  }
  getIdFormDelete = (id) => {
    this.setState({
      idStudent:id,
      contentNotification: id
    })
  }
  deleteStudent = () => {
    var items = this.state.dataStudent
    items = items.filter((value,key) => value.ID !== this.state.idStudent)
    this.setState({
      dataStudent:items
    })
  }
  // end delete student
  // start display notification
  displayNotification = () => {
    if(this.state.statusNotification){
      return(
        <Notification 
        offNotification={(status) => this.offNotification(status)}
        contentNotification={this.state.contentNotification}
        statusContent={this.state.statusContent}
        ></Notification>
      )
    }
  }
  onNotification = (statusNotification,statusContent) => { // bật notification
    this.setState({
      statusNotification:statusNotification,
      statusContent:statusContent
    })
  }
  offNotification = (status) => { //tắt notification
    this.setState({
      statusNotification:status
    })
  }
  // end display notification
  render() {
    return (
      <Router>
        {this.displayNotification()}
        <MDBContainer className="cn" style={{textAlign: 'center'}} responsive>
          {
            this.displayFormEdit()
          }
          {
            this.displayFormDelete()
          }
          <Nav></Nav>
          <Route exact path="/" component={HeaderHome} />
          <Route exact path="/" render={() => <StudentTable 
          dataStudent={this.state.dataStudent}
          // start add student
          statusAddForm={this.state.statusAddForm}
          changeStatusAddForm={(status) => this.changeStatusAddForm(status)}
          getDataFormAdd={(data) => this.getDataFormAdd(data)}
          onNotification={(statusNotification,statusContent) => this.onNotification(statusNotification,statusContent)}
          // end add student
          // start edit student
          statusEditForm={this.state.statusEditForm}
          changeStatusEditForm={(status) => this.changeStatusEditForm(status)}
          getStudentFromTable={(student) => this.getStudentFromTable(student)}
          studentFromTable={this.state.studentFromTable}
          // end edit student
          // start delete student
          statusDeleteForm={this.state.statusDeleteForm}
          changeStatusDeleteForm={(status) => this.changeStatusDeleteForm(status)}
          getIdFormDelete={(id) => this.getIdFormDelete(id)}
          // end delete student
          />} />
          <Route exact path="/detail.:id" component={HeaderDetail} />
          <Route exact path="/detail.:id" render={(props) => <DetailInformation {...props} dataStudent={this.state.dataStudent}/>} />
        </MDBContainer>
      </Router>
    );
  }
}

export default App;
