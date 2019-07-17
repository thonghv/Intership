import React, { Component } from 'react';
import TableInfor from './TableInfor'
import { connect } from 'react-redux'

class Table extends Component {
    render() {

        var  value  = this.props.value.datas;

        if(value.length){
            var result = value.map((data, index) => {
                return <TableInfor key={ index } value={ data } />
            })
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

const mapStateToProps = (state) => {
    return {
        value : state
    }
}

export default connect(mapStateToProps, null)(Table);