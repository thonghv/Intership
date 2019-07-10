import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routes from './Routes'
import Menu from './Menus'

class App extends Component {
    render() {
        return (
            <Router className='container'>
                <div>
                    <Menu />
                </div>
                <div>
                    { this.showContent(routes) }
                </div>
            </Router>
        )
    }

    showContent = (routes) => {
        var result = null
        if(routes.length>0){
            result = routes.map((route, index) => {
                return <Route path={ route.path } exact={ route.exact } component={ route.main } key={ index } />
            })
        }
        return result;
    }

}

export default App