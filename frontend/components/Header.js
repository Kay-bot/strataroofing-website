import { useState } from 'react';
import { APP_NAME } from '../config';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <a className={classnames('navbar-brand text-primary', styles.brand)}>
            <img alt="Strata Roofing" src="/images/logo.png" />
            <span>{APP_NAME}</span>
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className={classnames('ml-auto', styles.navLink)}>
              <NavLink href="#">Home</NavLink>
            </NavItem>
            <NavItem className={classnames('ml-auto', styles.navLink)}>
              <NavLink href="#">Our Team</NavLink>
            </NavItem>
            <UncontrolledDropdown
              className={classnames('ml-auto', styles.navLink)}
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                Our Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className={classnames('ml-auto', styles.navLink)}>
              <NavLink href="#">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
