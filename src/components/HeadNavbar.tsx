import React, { CSSProperties } from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

function HeadNavbar() {
  const navbarStyle: CSSProperties = {
    marginBottom: '2rem'
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" style={navbarStyle}> 
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