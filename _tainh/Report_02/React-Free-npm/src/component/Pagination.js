import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";
import React, { Component } from 'react';

class Pagination extends Component {
    activePage = (value) => {
        if(value === this.props.currentPage){
            return true
        }else{
            return false
        }
    }
    disabledPrevious = () => {
        if(this.props.currentPage === 1){
            return true
        }else{
            return false
        }
    }
    disabledNext = () => {
        if(this.props.currentPage === (Math.ceil(this.props.totalPage/this.props.studentOnPage))){
            return true
        }else{
            return false
        }
    }
    render() {
        var page = []
        var start = 0
        var end = 5
        for(var i = 1; i <= Math.ceil(this.props.totalPage/this.props.studentOnPage); i++){
            page.push(i)
        }
        if(page.length <= 5){
            page = page.slice(start,page.length)
        }else{
            if(this.props.currentPage < 5){
                page = page.slice(start,end)
            }else{
                end = this.props.currentPage + 2
                start = end - 5
                page = page.slice(start,end)
            }
        }
        return (
            <MDBRow>
                <MDBCol>
                    <MDBPagination className="mb-5" size="lg" color="blue" circle>
                    <MDBPageItem onClick={() => this.props.previousPage()} disabled={this.disabledPrevious()}>
                        <MDBPageNav aria-label="Previous">
                        <span aria-hidden="true">Previous</span>
                        </MDBPageNav>
                    </MDBPageItem>
                    {
                        page.map((value) => {
                            return(
                                <MDBPageItem onClick={(currentPage) => this.props.pagination(value)} active={this.activePage(value)}>
                                    <MDBPageNav>
                                    {value}
                                    </MDBPageNav>
                                </MDBPageItem>
                            )
                        })
                    }
                    <MDBPageItem onClick={() => this.props.nextPage()} disabled={this.disabledNext()}>
                        <MDBPageNav aria-label="Previous">
                        <span aria-hidden="true">Next</span>
                        </MDBPageNav>
                    </MDBPageItem>
                    </MDBPagination>
                </MDBCol>
            </MDBRow>
        );
    }
}

export default Pagination;
