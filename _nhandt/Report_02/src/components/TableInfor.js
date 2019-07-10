import React, { Component } from 'react';

class TableInfor extends Component {
    render() {

        var { value } = this.props
        
        return (
            <tr>
                <td>{ value.ID }</td>
                <td>{ value['Full Name'] }</td>
                <td>{ value['TMA Account'] }</td>
                <td>{ value.Password }</td>
                <td>{ value.Phone }</td>
                <td>{ value['Student ID'] }</td>
                <td>{ value['Student ID_1'] }</td>
            </tr>                        
        );
    }
}

export default TableInfor;