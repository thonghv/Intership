import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class Sheet extends Component {

    handleOnDrop = (files) => {
        this.props.formatData() 
        this.props.renderDragFile(files[0])
    }    

    render() {
        return (
            <div className='container'>
                <input type="file" id='file' className='inputfile' onChange={ this.renderFile } />      
                
                <label htmlFor="file">&nbsp; Choose a file &nbsp;</label>   

                <Dropzone onDrop={ this.handleOnDrop }>{({getRootProps}) => 
                                                                              (<div {...getRootProps()}  id='drop'  >
                                                                                
                                                                                   <h3> Drag files here</h3>
                                                                              </div>
                                                        )}
                </Dropzone>
            </div>
        );
    }

    renderFile = (event) => {
        event.preventDefault()
        this.props.renderFile(event)
        this.props.formatData()
    }

}

export default Sheet;
