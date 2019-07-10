import React, { Component } from "react";
import { MDBInput } from "mdbreact";

class InputPage extends Component {
    render() {
        return (
            <div className="form-group">
                    <MDBInput label="ID" size="lg" />
                    <MDBInput label="First Name" />
                    <MDBInput label="Last Name" size="sm" />
                <div className="form-group">
                    <button className="btn btn-info" onClick={this.Save}>Save</button>
                </div>
            </div>
        );
    }
    Save = () => {
        this.setState({editing:false});
    }
}

export default InputPage;

