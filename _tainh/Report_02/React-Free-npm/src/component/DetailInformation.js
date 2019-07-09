import { MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import React, { Component } from 'react';

class DetailInformation extends Component {
  render(match) {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              {
                this.props.dataStudent.map((value,key) => {
                  if(value.ID === parseInt(this.props.match.params.id)){
                    return (
                      <div className="grey-text">
                        <MDBInput label="ID" type="text" value={value.ID}/>
                        <MDBInput label="First Name" type="text" value={value.FirstName}/>
                        <MDBInput label="Last Name" type="text" value={value.LastName}/>
                        <MDBInput label="Address" type="text" value={value.Address}/>
                        <MDBInput label="Phone" type="text" value={value.Phone}/>
                        <MDBInput label="Email" type="text" value={value.Email}/>
                      </div>
                    )
                  }
                })
              }
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default DetailInformation;

