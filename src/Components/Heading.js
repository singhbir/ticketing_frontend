import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="text-center mt-5" style={{ fontSize: "40px" }}>
      <h1>{heading}</h1>
    </div>
  );
};

export default Heading;
