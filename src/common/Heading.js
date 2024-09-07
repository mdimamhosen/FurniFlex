import React from "react";

const Heading = ({ normal, colored }) => {
  return (
    <div>
      <h1>
        <span className="text-2xl font-bold">{normal}</span>
        <span className="text-2xl font-bold text-blue-500">{colored}</span>
      </h1>
    </div>
  );
};

export default Heading;
