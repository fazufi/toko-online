import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  
} from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import TokoOnline from "./TokoOnline";
// import Home from "./Home";
import Login from "./Login";
import Admin from "./Admin";

const HarusLogin = ({ capo: Capo, ...props }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...props}
      render={(props2) =>
        token ? (
          props.path === "/login" ? (
            <Redirect to="/admin" />
          ) : (
            <Capo {...props2} />
          )
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default function App() {
  return (
    // <ProvideAuth>
    <Router history={createBrowserHistory()}>
      <div>
        {/* <AuthButton /> */}
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>
              <strong>Warung Micin</strong>
            </Navbar.Brand>

            <Nav className="mr-auto" style={{ cursor: "pointer" }}>
              <Nav.Link href="/">HOME</Nav.Link>
              {/* <Nav.Link href="/login">LOGIN</Nav.Link> */}
              <Nav.Link href="/admin">ADMIN</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={TokoOnline} />
            
          
          <HarusLogin path="/login" component={Login}/>
            
         
          <HarusLogin path="/admin" capo={Admin}/>
           
          
        </Switch>
      </div>
    </Router>
    // </ProvideAuth>
  );
}

