import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <>
    <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        
        <i class="fas fa-users ">  Employee Management System</i>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
  </>
  )
}

export default Header