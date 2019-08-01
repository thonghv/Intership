import React, { Component } from 'react';
import "./App.css"
import ProductListpages from './pages/productListpages/productListpages';
class App extends Component {
    render() {
        return (
          <div className="container" >
            <div className="row">
              <ProductListpages />
            </div>
          </div>
        );
    }
}

export default App;