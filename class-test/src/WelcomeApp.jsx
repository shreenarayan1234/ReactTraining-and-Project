import React from "react";
import { useState, useEffect } from "react";
import WelcomeList from "./components/WelcomeList";

const WelcomeApp = () => {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState("");
  useEffect(() => {
    if (names.length > 0) {
      let lastName = names[names.length - 1];
      console.log(`Welcome ${lastName}.Hope you have a great day!`);
    }
  }, [names]);

  useEffect(() => {
    return () => {
      console.log("Unmount");
    };
  }, []);

  const handleAdd = () => {
    if (newName.trim() !== "") {
      setNames([...names, newName]);
      setNewName("");
    }
  };

  return (
    <>
      <h2>Welcome List</h2>
      {names.length < 5 ? (<div>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter  a name"
        />
      <button onClick={handleAdd}>Add Name</button></div>) : (
        <h3>Too many names</h3>
      )}
      <WelcomeList names={names} />
    </>
  );
};

export default WelcomeApp;
