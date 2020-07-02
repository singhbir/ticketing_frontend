import React from "react";
import { BsPersonPlusFill, BsPersonSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const Sidebarcomponent = () => {
  return (
    <div className="row col-md-6 d-flex offset-sm-3 mt-5">
      <div>
        <BsPersonPlusFill style={{ fontSize: "40px" }} />
        <h2 className="mt-2" style={{ fontSize: "20px" }}>
          Already a User{" "}
          <Link to="/login" className="text-decoration-none">
            Signin
          </Link>
        </h2>
      </div>
      <div className="ml-auto">
        <BsPersonSquare style={{ fontSize: "40px" }} />
        <h2 className="mt-2" style={{ fontSize: "20px" }}>
          New Member ? Please{" "}
          <Link to="/" className="text-decoration-none">
            Signup
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Sidebarcomponent;
