
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Item from './Item';
import React, { Component } from 'react';

class Table extends Component {
    
    render() {
            
        return (
            <div>
                <MDBTable>
                <MDBTableHead color="primary-color" textWhite>
                 <tr>
                     <th className="text-center">ID</th>
                     <th className="text-center">First Name</th>
                    <th className="text-center">Last Name</th>
                     <th className="text-center">Address</th>
                    <th className="text-center">Phone</th>
                     <th className="text-center">Email</th>
                    <th className="text-center">Action</th>
                </tr>
                </MDBTableHead>
                <MDBTableBody>
                {
                    this.props.tasks.map((value,index) => {
                        return (
                            <Item 
                            key={value.id} 
                            index={index} 
                            task={value}
                            onSubmit={this.props.onSubmit}
                            onDelete={this.props.onDelete}
                            >    
                            </Item>
                        )
                    })
                }
                </MDBTableBody>
                </MDBTable>
            </div>
        )
    }
}
export default Table;