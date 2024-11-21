import { useState } from "react";
import Button from "./components/Button";
import Count from "./components/count";
import { CountLevel } from "./components/count";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid black",
        width: "50%",
        height: "200px",
      }}
    >
      <Count number={count} />
      <Button update={updateCount} />
      <CountLevel number={count}/>
    </div>
  );
};

export default App;
