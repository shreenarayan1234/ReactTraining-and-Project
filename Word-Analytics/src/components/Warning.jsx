import React from 'react';

const Warning = ({  message }) => {
  if (message === "") return null;

  return <p className="warning">{message}</p>;
};

export default Warning;
