import React from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <Link to="/">
            <img
              width={"100px"}
              src="https://capitolcommunicator.com/wp-content/uploads/2018/06/netflix-Logo.jpg"
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-item" to="/">
              Home
            </Link>
            <Link className="nav-item" to="/Movies">
              Movies
            </Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="검색"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
