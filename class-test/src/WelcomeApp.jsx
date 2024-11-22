import style from "./components/Welcome.module.css";
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
    return () => {
      console.log("Unmount");
    };
  }, [names]);


  const handleRemove = (index) => {
      setNames((preNames)=>preNames.filter((_,i)=>i !==index)); 
  };

  const handleAdd = () => {
    if (newName.trim() !== "") {
      setNames([newName,...names]);
      setNewName("");
    }
  };

  return (
    <>
      <h2 className={style.welcome_app}>Welcome List</h2>
      {names.length < 5 ? (
        <div className={style.input_field}>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Enter  a name"
          />
          <button onClick={handleAdd}>Add Name</button>
        </div>
      ) : (
        <h3>Too many names</h3>
      )}
      <WelcomeList names={names} remove={handleRemove} />
    </>
  );
};

export default WelcomeApp;
