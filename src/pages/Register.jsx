import { useState } from "react";

import { Button, Form, FormControl } from "react-bootstrap";
// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { createUser } from "../redux/user";
import { useCreateUserMutation } from "../services/user";

function Register() {
  // const dispatch = useDispatch();
  const [ createUser ] = useCreateUserMutation();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(input);

    try {
      createUser({
        fname: input.fname,
        lname: input.lname,
        email: input.email,
        password: input.password,
      })
        .then((res) => {
          if (res.data) {
            navigate("/");
          } else {
            alert("All input are required!");
            return;
          }
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error("An error occured please try again later");
      return;
    }

    setInput({ fname: "", lname: "", email: "", password: "" });
  }

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center flex-column gap-4"
    >
      <h1 style={{ color: "orange" }}>Create account</h1>
      <Form onSubmit={handleSubmit}>
        <div className="mb-4">
          <FormControl
            placeholder="First name"
            name="fname"
            value={input.fname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <FormControl
            placeholder="Last name"
            name="lname"
            value={input.lname}
            onChange={handleChange}
          />
        </div>

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
          Create account
        </Button>
      </Form>
      <p>Already have an account?</p>
      <Link to={"/"}>
        <Button
          className="w-100 border-0"
          style={{ backgroundColor: "orange" }}
        >
          Login
        </Button>
      </Link>
    </div>
  );
}

export default Register;
