
import BasicTable from "./basictable";
import data from './components/data.json';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import View from './components/view'
import ModalPage from "./components/popup";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
            detail : null,
            dataView: {}
        }
    }

    

    showView = (item) => {
        this.setState({
            dataView : item
        })
    }

    render() {

        var { data } = this.state

        return (
            <Router>
                <Route path='/' exact component={() => <BasicTable detail={ this.state.dataView } data={data} showView={(item) => this.showView(item) }  />} />
                <Route path='/view' component={ () => <View detail={ this.state.dataView } /> } />
            </Router>

        );
    }
}

export default App;
