// import React, { Component } from "react";
// import Link from "next/link";

// class Header extends Component {
//   render() {
//     return (
//       <div>
//         <Link href="/"><a>Home</a></Link>
//         <Link href="/about">About</Link>
//         <Link href="/blog">Blog</Link>
//         <Link href="/portfolios">Portfolios</Link>
//       </div>
//     );
//   }
// }

// export default Header;

import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Example = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className= "port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Afiz Shaik</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <NavLink className="port-navbar-link" href="/">Home</NavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLink className="port-navbar-link" href="/about">About</NavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLink className="port-navbar-link" href="/blog">Blog</NavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLink className="port-navbar-link" href="/portfolios">Portfolio</NavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLink className="port-navbar-link" href="/cv">CV</NavLink>
            </NavItem>
            <NavItem className="port-navbar-item">
              <NavLink className="port-navbar-link" href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;