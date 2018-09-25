import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FaGithub } from 'react-icons/fa';

export default class Menubar extends Component {
  render(){
    return (
      <div className="footer bdr-top-1 bdr-gray">
            <Nav className="footer-menu">
              <NavItem>
                <NavLink disabled href="#">© 2018 GitHub, Inc.</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Terms</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Privacy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Security</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Status</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Help</NavLink>
              </NavItem>
            </Nav>
            <div className="footer-logo">
              <a href="/">
                <FaGithub size='26px' />
              </a>
            </div>

            <Nav className="footer-menu">
              <NavItem>
                <NavLink href="#">Contact GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">API</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Training</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
            </Nav>

      </div>
    )
  }
}