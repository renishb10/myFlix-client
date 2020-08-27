import React, { useState } from "react";
import PropTypes from 'prop-types';
import axios from 'axios';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import "./login-view.scss";

export const LoginView = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://my1980smoviesapi.herokuapp.com/login', {
      Username: username,
      Password: password
    })
    .then(response => {
      const data = response.data;
      props.onLoggedIn(data);
      console.log(data)
    })
    .catch(e => {
      console.log('no such user')
      console.log(e)
    });
    console.log("END")
  }


  return (
    <Container className="login-form">
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="current-password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>Log In</Button>
        <Form.Text className="text-muted">
          New user?<a href="#" onClick={() => props.onClick()}>click here</a>
        </Form.Text>
      </Form>
    </Container>
  )
}

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
}