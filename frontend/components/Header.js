import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import classnames from 'classnames';
import styles from './Main.module.scss';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#fff" expand="md">
        <NavLink className={classnames(styles.brand)} href="/">
          <img alt="strata roofing" src="/images/logo.png" />
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto pr-5 font-weight-bold" navbar>
            <NavItem className={classnames(styles.navLink)}>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown
              nav
              inNavbar
              className={classnames(styles.navLink)}
            >
              <DropdownToggle nav caret>
                Service
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Service 1</DropdownItem>
                <DropdownItem>Service 2</DropdownItem>
                <DropdownItem>Service 3</DropdownItem>
                <DropdownItem>Service 4</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className={classnames(styles.navLink)}>
              <NavLink href="#">About</NavLink>
            </NavItem>

            <NavItem className={classnames(styles.navLink)}>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
