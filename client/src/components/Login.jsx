import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <Form>
        <FormGroup>
          <Label>Username</Label>
          <Input type="text" name="username" />
          <Label>Password</Label>
          <Input type="password" name="password" />
          <br />
          <Button color="success">Submit</Button>
        </FormGroup>
      </Form>
    </div>
    )
}

export default Login;