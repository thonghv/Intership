import React, { Component } from 'react';
import './App.css';
import Detail from './components/Detail';
import Total from './components/Total';
import { BrowserRouter as Router, Route } from 'react-router-dom';



class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            music : null
        };
    };

    onDetailInfor = (music) => {
        this.setState({
            music : music
        });
    }

    render() {
        
        let { music } = this.state;

        return (
            <Router>
                <div className='container'>
                    <Route exact path='/' component={() => <Total onDetailInfor={ this.onDetailInfor }/> }></Route>
                    <Route path='/detail' component={() => <Detail music={ music }/> }></Route>
                </div>
            </Router>
        );
    }
}

export default App;
