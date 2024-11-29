import React, { useState } from "react";
import Warning from "./Warning";

const TextArea = ({text, setText}) => {
 
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    let newText = event.target.value; // Access the current input value
    if (newText.includes("<script>")) {
      setMessage("No 'script' tag is allowed");
      newText = newText.replace("<script>", " ");
    } else if (newText.includes("@")) {
      setMessage("No @ is allowed!");
      newText = newText.replace("@", "");
    } else {
      setMessage("");
    }
    setText(newText);
  };
  return (
    <>
      <textarea
        className="textarea"
        rows={12}
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck={false}
      />
      <Warning message={message} />
    </>
  );
};

export default TextArea;
