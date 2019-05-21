import React, { Component } from 'react';
import DetailDanhMuc from './bodyDetail/DetailDanhMuc';
import DetailDanhSach from './bodyDetail/DetailDanhSach';

class Detail extends Component {
	render() {

		let { music } = this.props;	

		return (
			<div>
				<div className='text-center'>
					<h1 className='green'>Detail Information</h1>
					<hr />
				</div>
				<table className="table table-bordered table-hover">
					<DetailDanhMuc />
					<DetailDanhSach music={ music } />
				</table>
			</div>
		);
	};
}

export default Detail;