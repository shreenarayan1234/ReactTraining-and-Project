import React from "react";

const WelcomeList = ({ names }) => {
  return (
    <>
      <h1>List of Name</h1>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
};

export default WelcomeList;
