import React from "react";
import style from "./Welcome.module.css";

const WelcomeList = ({ names, remove }) => {
  return (
    <>
      <h1 className={style.list}>List of Name</h1>
      <div className={style.namelist}>
      <ul>
        {names.map((name, index) => (
          <li key={index} > {name} <button style={{ cursor:"pointer" }} onClick={()=>remove(index)}>x</button></li>
        ))}
      </ul>
      </div>
      <h1 className={style.botton}> Total number of Uers {names.length}</h1>
    </>
  );
};

export default WelcomeList;
