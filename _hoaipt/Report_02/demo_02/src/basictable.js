import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Rowdata from './components/rowdata';
import ModalPage from "./components/popup";
class BasicTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }   
    deleteproduct = (id) => {
        var arrdata = this.props.data;
        arrdata.splice(id, 1);
        this.setState({ data: arrdata });
    }
    editproduct = (id, giatri) => {
        this.props.editproduct(id, giatri)
    }
    addproduct =(giatri)=>{
        var arradd = this.props.data;
        arradd.push(giatri,1);
        this.setState({
           data:arradd
        });
    }
    add=(data)=>{
        var items = this.state.data
        items.push(data)
        this.setState({
            data:items
        })
    }
    render() {

        var { data } = this.props;
        var result = data.map((value, index) => {
            return <Rowdata
                key={index}
                index={index}
                data={value}
                showView={(item) => this.props.showView(value)}
                delete={(id) =>  this.deleteproduct(id) }
                edit={(id, giatri) =>  this.editproduct(id, giatri) }
                detail={this.props.detail}
                Add={(giatri)=>this.addproduct(giatri)}
            />
        });
        return (
            
            <div>
                <ModalPage add={(data) => this.add(data)} />
                <MDBTable>
                    <MDBTableHead color="primary-color" textWhite>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>actions</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {result}
                    </MDBTableBody>
                </MDBTable>
            </div>
        );
    }
}

export default BasicTable;


