import React, { Component } from 'react';
import axios from 'axios';
import DanhSach from './body/DanhSach';
import DanhMuc from './body/DanhMuc'

class Total extends Component {

	    constructor(props){
	        super(props);
	        this.state = {
	            index : 1,
	            music : []
	        };
	    };

    componentDidMount(){
        axios({
            method: 'GET',
            url: 'http://api.soundcloud.com/tracks.json?q=edm&limit=25&offset=1&client_id=0d4392665746d1ccedc7193e7338617e',
            data: null
        }).then(res => {
            this.setState({
                music : res.data
            });
        }).catch(err => {
            console.log(err);
        });
    }

    // onDetail = () => {
    // 	return console.log('haha');
    // }

	render() {

		let { music } = this.state;
		let list = music.map((music, index) => {
            return <DanhSach 
            			key={ index } 
            			music={ music } 
            			index={ index } 
            			onDetailInfor={this.props.onDetailInfor}
            		/>
        })

		return (
			<div>
				<div className='text-center'>
                <h1 className='green'>Musics Table</h1>
                <hr />
	            </div>
	            <div className="row">
	                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
	                    <table className="table table-bordered table-hover">
	                        <DanhMuc />
	                        { list }
	                    </table>
	                </div>
	            </div>
			</div>
		);
	};
}

export default Total;