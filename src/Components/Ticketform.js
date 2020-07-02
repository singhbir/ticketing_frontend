import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import { signout } from "./helper/helpersignup";

const Ticketform = () => {
  let [data, setData] = useState();
  let history = useHistory();

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("jwt")));
  }, []);

  const handleChange = () => {
    //
  };
  const onSubmit = () => {
    //
  };

  const mysignout = () => {
    signout();
    history.push("/");
  };

  const ticketform = () => {
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
                value={data ? data.name : ""}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                type="email"
                onChange={handleChange("email")}
                value={data ? data.email : ""}
                readOnly
              />
            </div>

            <div className="form-group">
              <label className="text-dark">Department</label>
              <select className="form-control">
                <option value="PWSLab DevOps Support">
                  PWSLab DevOps Support
                </option>
                <option value="iSupport">iSupport</option>
              </select>
            </div>

            <div className="form-group">
              <label className="text-dark">Category</label>
              <select className="form-control">
                <option value="New Project CI/CD pipeline setup">
                  New Project CI/CD pipeline setup
                </option>
                <option value="Update CI/CD pipeline configuration">
                  Update CI/CD pipeline configuration
                </option>
                <option value="DevSecOps pipeline setup">
                  DevSecOps pipeline setup
                </option>
                <option value="Docker and Containers">
                  Docker and Containers
                </option>
              </select>
            </div>

            <div className="form-group">
              <label className="text-dark">Priority</label>
              <select className="form-control">
                <option value="p1">P1</option>
                <option value="p2">P2</option>
                <option value="p3">P3</option>
                <option value="p4">P4</option>
              </select>
            </div>

            <div className="form-group">
              <label className="text-dark">Subject</label>
              <input type="text" className="form-control" />
            </div>

            <div className="form-group">
              <label className="text-dark">Subject</label>
              <textarea cols="5" rows="5" className="form-control"></textarea>
            </div>

            <button className="btn btn-success btn-block mb-5">Submit</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <Heading heading="Submit a Ticket" />
      <h5 className="text-center mb-5">Ticket Information</h5>
      {ticketform()}
      <button
        className="btn col-md-6 offset-sm-3 btn-danger mb-5"
        onClick={mysignout}
      >
        Signout
      </button>
    </div>
  );
};

export default Ticketform;
