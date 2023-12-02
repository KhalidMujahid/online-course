import { useState } from "react";

import { Button, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/user";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);

    dispatch(loginUser(input));

    navigate("/dashboard");

    setInput({ email: "", password: "" });
  }

  return (
    <div
      style={{ height: "80vh" }}
      className="d-flex justify-content-center align-items-center flex-column gap-4"
    >
      <h1 style={{ color: "orange" }}>Login</h1>
      <Form onSubmit={handleSubmit}>
        <div className="mb-4">
          <FormControl
            placeholder="Email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <FormControl
            placeholder="password"
            name="password"
            type="password"
            value={input.password}
            onChange={handleChange}
          />
        </div>

        <Button
          type="submit"
          className="w-100 border-0"
          style={{ backgroundColor: "orange" }}
        >
          Login
        </Button>
      </Form>
      <p>Dont have an account?</p>
      <Link to={"/register"}>
        <Button
          className="w-100 border-0"
          style={{ backgroundColor: "orange" }}
        >
          Create account
        </Button>
      </Link>
    </div>
  );
}

export default Login;
