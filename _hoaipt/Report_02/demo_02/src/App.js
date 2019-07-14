
import BasicTable from "./basictable";
import data from './components/data.json';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import View from './components/view'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            detail: null,
            dataView: {}
        }
    }

    editproduct = (id, value) => {
        const { data } = this.state;
        data[id]  = value;
        if(value){
            this.setState({
                data
            })
        }
    }

    showView = (item) => {
        this.setState({
            dataView: item
        })
    }
    render() {

        var { data } = this.state

        return (           
            <Router>
                <Route path='/' exact component={() => <BasicTable editproduct={this.editproduct}
                 detail={this.state.dataView} data={data}
                 showView={(item) => this.showView(item)} />} />
                <Route path='/view' component={() => <View detail={this.state.dataView} />} />
            </Router>
        );
    }
}

export default App;
