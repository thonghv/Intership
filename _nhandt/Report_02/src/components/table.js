import React, { Component } from 'react';
import TableInfor from './TableInfor'
import Sheet from './sheet_js'
import { Redirect } from 'react-router-dom';

class Table extends Component {
    render() {

        var { value } = this.props;
        var index = 1;

        if(value.length){
            for(var i=0; i<value.length; i++){
                if(typeof(value[i].ID) !== 'number'){
                    index = -1;
                    alert('Bạn chưa nhập đầy đủ dữ liệu cột ID !')
                    return <Sheet />
                }
                if(typeof(value[i]['Full Name']) !== 'string'){
                    index = -1;
                    alert('Bạn chưa nhập đầy đủ dữ liệu cột Full Name !')
                    return <Sheet />
                }
                if(typeof(value[i]['TMA Account']) !== 'string'){
                    index = -1;
                    alert('Bạn chưa nhập đầy đủ dữ liệu cột TMA Account !')
                    return <Sheet />
                }
                if(typeof(value[i].Phone) !== 'string'){
                    index = -1;
                    alert('Bạn chưa nhập đầy đủ dữ liệu cột Phone !')
                    return <Sheet />
                }                
            }
            if(index>0){
                var result = value.map((data, index) => {
                    return <TableInfor key={ index } value={ data } />
                })
                
            }
        }

        return (
            <div className='container'>   
                <table className="table table-hover">
                   <thead>
                       <tr>
                           <th>ID</th>
                           <th>Full Name</th>
                           <th>TMA Account</th>
                           <th>Password</th>
                           <th>Phone</th>
                           <th>Student ID</th>
                           <th>Student ID</th>
                       </tr>
                   </thead>
                   <tbody>
                      {result}
                   </tbody>
               </table>                               
            </div>
        );
    }
}

export default Table;