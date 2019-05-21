import React, { Component } from 'react';
import NotFound from './NotFound';

class DetailDanhSach extends Component {
	render() {

		let { music } = this.props;	

		if(music) {
			return (
				<tbody>
					<tr>
						<td>
							<h5>{ music.title }</h5>
						</td>
						<td>
							<h5>{ music.uri }</h5>
						</td>
						<td>
							<h5>{ music.sharing }</h5>
						</td>
						<td>
							<h5><img src={ music.artwork_url } className="img-responsive zoom" /></h5>
						</td>
						<td>
							<h5>{ music.description }</h5>
						</td>
					</tr>
				</tbody>
			);
		}else{
			return <NotFound />
		}
	};
}

export default DetailDanhSach;