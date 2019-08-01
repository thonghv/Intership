import React, { Component } from 'react';
import ProductList from '../../component/productsList/productList';
import ProductItem from '../../component/productitem/productItem';
import {connect} from "react-redux";
import axios from "axios"
class ProductListpages extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount() {
        axios({
            method:"GET",
            url: "http://api.soundcloud.com/tracks.json?q=edm&limit=5&offset=1&client_id=0d4392665746d1ccedc7193e7338617e",
            data:null
          }).then(res=>{
              console.log(res)
              this.setState({
                  products : res.data
              })
          }).catch(err=>{
              console.log(err)
          });
    }
    
    render() {
        // console.log(this.props.products)
        // var {products}=this.props;
        var {products}=this.state;
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ProductList >
                    {this.showproduct(products)}
                </ProductList>
              </div>
        );
    }
    showproduct=(products)=>{
        var result=null;
      if(products.length>0){
          result=products.map((product,index)=>{
              return(
                  <ProductItem
                  key={index}
                  product={product}
                  index={index}
                  />
                )
            }
          );
      }  
        return result;
    }
}
const mapStateToProps = (state) =>{
    return{
        products : state.products
    }
}
export default connect(mapStateToProps, null)(ProductListpages);