import React from 'react'

const SpreadOperatorInObj = () => {
  const Obj1 = {
    name:"Shree",
    address:"Gaighat",
  };
  const Obj2 = {...Obj1,
    age:24,
    grade:"7th Sem",
  };
  return (
    <>
    <hr/>
    <h2>Object Render Using Spread Operator</h2>
      <p>My name is {Obj2.name}.</p>
      <p>I live in {Obj2.address}.</p>
      <p>I am {Obj2.age} old and studing in {Obj2.grade}.</p>
    </>
  );
}

export default SpreadOperatorInObj
