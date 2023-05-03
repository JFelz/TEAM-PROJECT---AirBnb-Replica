/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';
import airbnbLogo from '../public/airbnb-logo-10.png';

export default function NavBarAuth() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
      <Container>
        {/* <Link passHref href="/">
          <Navbar.Brand style={{ color: '#FF385C' }}>AirBnb</Navbar.Brand>
        </Link> */}
        <Container>
          <Navbar.Brand>
            <Image
              src={airbnbLogo}
              width={150}
              height={40}
              className="d-inline-block align-top"
              alt="Airbnb logo"
            />
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/explore">
              <Nav.Link style={{ color: 'black' }}>Explore</Nav.Link>
            </Link>
            <Link passHref href="/MyListings">
              <Nav.Link style={{ color: 'black' }}>My Listings</Nav.Link>
            </Link>
            <Link passHref href="/Listings/New">
              <Nav.Link style={{ color: 'black' }}>Create a New Listing</Nav.Link>
            </Link>
            <Link passHref href="/Profile">
              <Nav.Link></Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
