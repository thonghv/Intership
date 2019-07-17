import React, { Component } from 'react';
import * as XLSX from 'xlsx';
import { connect } from 'react-redux'
import { getData } from './../actions/index'
import Sheet from './../components/sheet_js'
import { Redirect } from 'react-router-dom'

class SheetContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }

    renderFile = (event) => {
        
        var filePath = document.getElementById('file').value;
        var allowedExtensions = /(\.xlsx)$/i;
        
        if(!allowedExtensions.exec(filePath)){
            alert('Open file Excel only');
            return false;
        }else{
            var value
            const scope = this
            var files = event.target.files, f = files[0];
            var reader = new FileReader();
            reader.onload = function(event) {
                var data = new Uint8Array(event.target.result);
                var workbook = XLSX.read(data, {type: 'array'});
                var first_sheet_name = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[first_sheet_name];
                value = XLSX.utils.sheet_to_json(worksheet) 
                scope.setState({
                    value : value
                })
            };
            reader.readAsArrayBuffer(f);
        }
    }

    renderDragFile = (event) => {
        var allowedExtensions = /(\.xlsx)$/i;
         if(!allowedExtensions.exec('\\'+event.path)){
            alert('Open file Excel only');
            return false;
        }else{
            var value
            const scope = this
            var files = event, f = files;
            var reader = new FileReader();
            reader.onload = function(event) {
                var data = new Uint8Array(event.target.result);
                var workbook = XLSX.read(data, {type: 'array'});
                var first_sheet_name = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[first_sheet_name];
                value = XLSX.utils.sheet_to_json(worksheet)
                scope.setState({
                    value : value
                })
            };
            reader.readAsArrayBuffer(f);
        }
    }

    showTable = () => {
        var { value } = this.state;
        var index = 1;
        if(value.length){
            for(var i=0; i<value.length; i++){
                if(typeof(value[i].ID) !== 'number'){
                    index = -1;
                    alert('Bạn chưa nhập đầy đủ dữ liệu cột ID !')
                    return <Redirect to='/'/>
                }
                if(typeof(value[i]['Full Name']) !== 'string'){
                    index = -1;
                    alert('Bạn chưa nhập đầy đủ dữ liệu cột Full Name !')
                    return <Redirect to='/'/>
                }
                if(typeof(value[i]['TMA Account']) !== 'string'){
                    index = -1;
                    alert('Bạn chưa nhập đầy đủ dữ liệu cột TMA Account !')
                    return <Redirect to='/'/>
                }
                if(typeof(value[i].Phone) !== 'string'){
                    index = -1;
                    alert('Bạn chưa nhập đầy đủ dữ liệu cột Phone !')
                    return <Redirect to='/'/>
                }                
            }
            if(index>0){
                this.props.getAllData(value)
                return <Redirect to='/table' />
            }
        }
    }

    formatData = () => {
        this.setState({
            value : ''
        })
        console.log('component')
    }

    render() {      
        return (
            <div>
                <Sheet renderFile={ this.renderFile } renderDragFile={ this.renderDragFile } formatData={ this.formatData } />
                { this.showTable() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        value : state.datas
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllData : (data) => {
            dispatch(getData(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SheetContainer);