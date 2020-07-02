import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../Components/helper/helpersignup";
import Heading from "./Heading";
import Sidebarcomponent from "./Sidebarcomponent";
import Navbar from "./Navbar";
const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch((err) => console.log("Error in signup"));
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                type="email"
                onChange={handleChange("email")}
                value={email}
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                className="form-control"
                type="password"
                onChange={handleChange("password")}
                value={password}
              />
            </div>

            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New Account was Created Successfully . Please{" "}
            <Link to="/login">Login Here</Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Heading heading="SIGNUP" />
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <Sidebarcomponent />
    </div>
  );
};

export default Signup;
