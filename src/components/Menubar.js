import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,Form } from 'reactstrap';
import { FaGithub, FaBell, FaPlus } from 'react-icons/fa';
import ProfilePic from '././../images/profile-pic.png';


export default class Menubar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <div className='container'>
          <NavbarBrand href="/"><FaGithub size='34px' className="icon" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto"  navbar>
            <Form>
              <input className="form-control form-control-sm mr-sm-2 search-box" type="search" placeholder="Search or jump to..." aria-label="Search" />
            </Form>
            <NavItem>
              <NavLink href="//">Pull requests</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Issues</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Marketplace</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Explore</NavLink>
            </NavItem>
          </Nav>
          <Nav className="mr-auto"  navbar>
            <NavItem>
              <NavLink href="/"><FaBell size='16px' /></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <FaPlus size='16px' />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a" href="/blah">New repository</DropdownItem>
                <DropdownItem tag="a" href="/blah">Import repository</DropdownItem>
                <DropdownItem tag="a" href="/blah">New gist</DropdownItem>
                <DropdownItem tag="a" href="/blah">New organization</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <img width="20" height="20" src={ProfilePic} className='menu-profilepic' alt="Github profile mini"/>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a" href="/blah">
                  Signed in as <div className='font-700'>sudarshanb11</div>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag="a" href="/blah">Your profile</DropdownItem>
                <DropdownItem tag="a" href="/blah">Your repositories</DropdownItem>
                <DropdownItem tag="a" href="/blah">Your stars</DropdownItem>
                <DropdownItem tag="a" href="/blah">Your gists</DropdownItem>
                <DropdownItem divider />
                <DropdownItem tag="a" href="/blah">Help</DropdownItem>
                <DropdownItem tag="a" href="/blah">Settings</DropdownItem>
                <DropdownItem tag="a" href="/blah">Sign out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        </div>
      </Navbar>
    );
  }
}