import React, { Component } from "react";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";

export default class NavbarComponent extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <strong>WARUNG GENERASI MICIN</strong>
          </Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    );
  }
}
