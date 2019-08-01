import React, { Component } from 'react';

class ProductItem extends Component {
    render(){
        var {product,index}=this.props;
        return (           
            <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.kind}</td>
            <td>{product.created_at}</td>
            <td>{product.genre}</td>
          </tr>
        );
    }
}

export default ProductItem;