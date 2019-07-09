import React, { Component } from 'react';
import * as XLSX from 'xlsx';
import Table from './table';
import { Redirect } from 'react-router-dom';

class Sheet extends Component {

    constructor(props){
        super(props);
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
            var {value} = this.state;
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

    render() {

        var { value } = this.state

        if(value.length){
            return <Table value={ value }/>
        }

        return (
            <div className='container'>
                <input type="file" id='file' className='inputfile' onChange={this.renderFile } />      
                
                <label htmlFor="file">&nbsp; Choose a file &nbsp;</label>                           
            </div>
        );
    }
}

export default Sheet;