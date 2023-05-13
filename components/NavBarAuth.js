/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import airbnbLogo from '../public/airbnb-logo-10.png';
import NavStyle from '../styles/NavStyles';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
      <Container>
        {/* <Link passHref href="/">
          <Navbar.Brand style={{ color: '#FF385C' }}>AirBnb</Navbar.Brand>
        </Link> */}
        <Container style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
        }}
        >
          <Navbar.Brand>
            <Image
              src={airbnbLogo}
              width={135}
              height={40}
              alt="Airbnb logo"
            />
          </Navbar.Brand>
        </Container>
        <Navbar aria-controls="responsive-navbar-nav" />
        {/* <Navbar id="responsive-navbar-nav"> */}
        <Nav className="me-auto spa">
          {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
          <Link passHref href="/explore">
            <Nav.Link className="Explore" style={NavStyle}>Explore</Nav.Link>
          </Link>
          <Link passHref href="/MyListings">
            <Nav.Link style={NavStyle}>My Listings</Nav.Link>
          </Link>
          <Link passHref href="/Listings/New">
            <Nav.Link className="NewListing" style={NavStyle}>Create Listing</Nav.Link>
          </Link>
          <Link passHref href="/search">
            <Nav.Link style={NavStyle}>Search</Nav.Link>
          </Link>
          <Button style={{ width: '100px', height: '50px', fontFamily: 'Tahoma' }} variant="danger" onClick={signOut}>Log Out</Button>
        </Nav>
        {/* </Navbar> */}
      </Container>
    </Navbar>
  );
}
