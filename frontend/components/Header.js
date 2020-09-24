import { useState } from 'react';
import Link from 'next/link';
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
            <NavItem className={classnames('text-center', styles.navLink)}>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <NavLink href="/our-team">Our Team</NavLink>
            </NavItem>
            <UncontrolledDropdown
              className={classnames('text-center', styles.navLink)}
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                <Link href="/our-services">Our Services</Link>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <NavLink href="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <NavLink href="/contact">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
