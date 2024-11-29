import React, { useState } from "react";
import TextArea from "./TextArea";
import Stats from "./Stats";

const Container = () => {
  const [text, setText] = useState("");

  const numberOfCharacter = text.length;
  const instragramCharacterLeft = 280 - numberOfCharacter;
  const facebookCharacterLeft = 2200 - numberOfCharacter;

  //bumber of words
  const wordArray = text.trim().split(/\s+/); // Split by one or more spaces
  const filteredWordArray = wordArray.filter((word) => word !== ""); // Remove empty strings (if any)
  const wordCount = filteredWordArray.length; // Count the words

  const stats = {
    numberOfCharacter,
    instragramCharacterLeft,
    facebookCharacterLeft,
    wordCount,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
};

export default Container;
