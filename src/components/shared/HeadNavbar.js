import React, { useState } from 'react';
import { Collapse, Navbar, Nav, NavbarToggler, NavbarBrand, NavItem, Form, Input, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { goToHome } from '../../modules/datas';

const logoStyle = {
  width: 100,
  marginRight: 10,
  paddingBottom: 5,
}

function HeadNavbar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
        <img
          src={ require('../../images/sparrow_logo.png') }
          style={logoStyle} onClick={() => dispatch(goToHome())}
          alt="sparrow logo"
        />
        <NavbarBrand href="/">소스코드 결함탐지</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Form inline>
                <Input type="text" placeholder="검색..." className="mb-2 mr-sm-2 mb-sm-0" />
                <Button outline color="info">검색</Button>
              </Form>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  )
}

export default React.memo(HeadNavbar);
