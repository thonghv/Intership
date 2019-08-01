import React, { Component } from 'react';
class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                    <div className="panel-heading">
                      <h3 className="panel-title">Danh sach data</h3>
                    </div>
                    <div className="panel-body">
  
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>stt</th>
                            <th>ID</th>
                            <th>kind</th>
                            <th>created_at</th>
                            <th>genre</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.props.children}
                        </tbody>
                      </table>
                      
                    </div>
                </div>
                
        );
    }
}

export default ProductList;