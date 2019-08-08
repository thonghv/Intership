import React, { Component } from 'react';
import { MDBBtn, MDBBtnGroup  } from 'mdbreact';
import FormEdit from './FormEdit';
import FormView from './FormView'
class Item extends Component{
    onDelete = () =>{
      this.props.onDelete(this.props.task.id);
    }
    onEdit = () =>{
      this.props.onEdit(this.props.task.id);
    }
  render() {
    var {task, index}=this.props;
    return(
      <tr>
          <td>{ index + 1 }</td>
          <td>{ task.firstname }</td>
          <td>{ task.lastname }</td>
          <td>{ task.address }</td>
          <td>{ task.phone }</td>
          <td>{ task.email }</td>
          <td className="text-center">
          <MDBBtnGroup size="sm">
            <FormView
            taskEditing = {this.props.task}
            >
            </FormView>
            <FormEdit
            taskEditing = {this.props.task} 
            
            onSubmit={this.props.onSubmit}
            >
            </FormEdit>
            <MDBBtn color="primary"  onClick={() => this.onDelete()}>Delete</MDBBtn>
            </MDBBtnGroup>
          </td>
      </tr>
      )
    }
}
export default Item;