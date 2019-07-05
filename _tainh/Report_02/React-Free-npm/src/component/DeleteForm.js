import React, { Component } from 'react';
import { MDBModal, MDBBtn, MDBModalHeader, MDBModalFooter } from 'mdbreact';
class DeleteForm extends Component {
    clickDelete = () => {
        this.props.deleteStudent()
        this.props.changeStatusDeleteForm(!this.props.statusDeleteForm)
        this.props.onNotification(true,3)
    }
    render() {
        return (
            <div>
                <MDBModal isOpen={this.props.statusDeleteForm} toggle={(status) => this.props.changeStatusDeleteForm(!this.props.statusDeleteForm)}>
                    <MDBModalHeader toggle={(status) => this.props.changeStatusDeleteForm(!this.props.statusDeleteForm)}>Are you sure delete???</MDBModalHeader>
                    <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={(status) => this.props.changeStatusDeleteForm(!this.props.statusDeleteForm)}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={() => this.clickDelete()}>Delete</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default DeleteForm;