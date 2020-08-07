import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const logoStyle: CSSProperties = {
  width: 100,
  marginRight: 10,
  paddingBottom: 5,
}

function HeadNavbar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <img src={ require('../images/sparrow_logo.png') } style={logoStyle} alt="sparrow logo" />
        <Navbar.Brand href="#home">소스코드 결함탐지</Navbar.Brand>
        <Nav className="mr-auto">

        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="노드 이름으로 찾기..." className="mr-sm-2" />
          <Button variant="outline-info">검색</Button>
        </Form>
      </Navbar>
    </>
  )
}

export default React.memo(HeadNavbar);
