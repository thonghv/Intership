import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DanhSach extends Component {

    // onDetail = () => {
    //     this.props.onDetail()
    // }

    onDetailInfor = () => {
        this.props.onDetailInfor(this.props.music);
    }

    render () {
        let { music, index } = this.props;

        return (
            <tbody>
                <tr>
                    <td>
                        <h5>{ index + 1 }</h5>
                    </td>
                    <td>
                        <h5>{ music.title }</h5>
                    </td>
                    <td>
                        <img src={ music.artwork_url } className="img-responsive" />
                    </td>
                    <td>
                        <h5>{ music.user.username}</h5>
                    </td>
                    <td className='text-center'>
                        <button 
                            type="button" 
                            className="btn btn-warning"
                            onClick={ this.onDetailInfor }
                        >
                            <span className='fa fa-pencil mr-5'></span> &nbsp;
                            <Link to='/detail' className='link'>Detail</Link>
                        </button>
                    </td>
                </tr>
            </tbody>
        );
    }
};

export default DanhSach;