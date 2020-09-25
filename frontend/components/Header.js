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
      <div
        className={classnames(
          'text-center text-light py-1',
          styles['secondary-header']
        )}
      >
        <p className={classnames(styles['md-devices'])}>
          Strata Roofing Pty Ltd
          <span> | </span>
        </p>

        <p className={classnames(styles['md-devices'])}>
          Professional Roofing Services throughout the Sydney Area{' '}
          <span> | </span>
        </p>

        <p>Contact Us: service@strataroofing.com.au</p>
      </div>
      <Navbar color="#fff" light expand="md">
        <Link href="/">
          <NavbarBrand>
            <a className={classnames('navbar-brand', styles.brand)}>
              <img alt="Strata Roofing" src="/images/logo.png" />
              <span>{APP_NAME}</span>
            </a>
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/our-team">
                <NavLink>Our Team</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown
              className={classnames('text-center', styles.navLink)}
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                Our Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link href="/our-services">
                    <NavLink> Option 1</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/our-services">
                    <NavLink> Option 2</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/our-services">
                    <NavLink>Option 3</NavLink>
                  </Link>
                </DropdownItem>
                <DropdownItem>
                  <Link href="/our-services">
                    <NavLink>Option 4</NavLink>
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/gallery">
                <NavLink>Gallery</NavLink>
              </Link>
            </NavItem>
            <NavItem className={classnames('text-center', styles.navLink)}>
              <Link href="/contact">
                <NavLink>Contact Us</NavLink>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
