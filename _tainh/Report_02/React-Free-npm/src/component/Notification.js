import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
class Notification extends Component {
    content = () => {
        if(this.props.statusContent === 1){
            return (
                <h5>Thêm thành công sinh viên {this.props.contentNotification.LastName + " " + this.props.contentNotification.FirstName}</h5>
            )
        }else if(this.props.statusContent === 2){
            return (
                <h5>Sửa thành công sinh viên có mã là {this.props.contentNotification.ID}</h5>
            )
        }else{
            return (
                <h5>Xóa thành công sinh viên có mã là {this.props.contentNotification}</h5>
            )
        }
    }
    render() {
        return (
            <AlertContainer position="bottom-right">
                <Alert onDismiss={() => this.props.offNotification(false)} timeout={2000} type="success">{this.content()}</Alert>
            </AlertContainer>
        );
    }
}

export default Notification;