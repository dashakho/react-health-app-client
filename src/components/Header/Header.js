import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#your-doctors">Find Hospitals on Google Maps</Nav.Link>
    <Nav.Link href="#api-doctors">Find Your Doctor</Nav.Link>
    <Nav.Link href="#create-doctor">Create Doctor</Nav.Link>
    <Nav.Link href="#doctors">My Doctors</Nav.Link>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)
// <Nav.Link to="/">Home</Nav.Link>
const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
  </Fragment>
)

const Header = ({ user }) => (
  // <nav class="navbar navbar-dark bg-dark">
  // <Navbar bg="primary" variant="dark" expand="md">
  /* <Nav.Link href="#doctors">MyDoctors</Nav.Link> */
  // { user && <span className="navbar-text mr-2">Welcome, {user.email}</span>}
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
