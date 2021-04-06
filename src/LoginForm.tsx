import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from 'reactstrap';
import axios from 'axios';
import { useCookies } from 'react-cookie'

type LoginResponse = {
  token: string
}

const loginEndpoint = `${process.env.REACT_APP_API_BASE_URL}/login`

const LoginForm = () => {
  const [, setCookie] = useCookies(['token']);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post<LoginResponse>(loginEndpoint, {
        username,
        password
      })

      setCookie('token', response.data.token)

      // for some reason history.push is not working :(
      document.location.reload()

    } catch (error) {
      if (error.response) {
        alert(`Failed!\n${error.response.data}`)
      } else {
        alert(`Failed!`)
      }
    };
  }

  return (
    <>
      <Form className="form" onSubmit={submit}>
        <FormGroup>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-3"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Sign in</Button>
      </Form>
    </>
  );
};

export default LoginForm;
