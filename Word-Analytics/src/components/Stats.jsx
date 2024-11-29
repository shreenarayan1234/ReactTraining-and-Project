import React, { useState } from "react";

const Stats = ({stats}) => {
  const {numberOfCharacter, instragramCharacterLeft, facebookCharacterLeft, wordCount} = stats;
  return (
    <section className="stats">
      <Stat number = {wordCount} label="Words"/>
      <Stat number = {numberOfCharacter} label="Characters"/>
      <Stat number = {instragramCharacterLeft} label="Instagram"/>
      <Stat number = {facebookCharacterLeft} label="Facebook"/>
    </section>
  );
};
function Stat({ number, label }) {
  return(
  <section className="stat">
    <span className={`${number < 0 ? 'stat_number-limit' : 'stat_number'}`}>{number}</span>
    <h2 className="second_heading">{label}</h2>
  </section>);
}


export default Stats;
