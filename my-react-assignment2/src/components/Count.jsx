import React from 'react'

const Count = () => {
  const myArr = [1,2,3];
  const myArr2 = [...myArr,4, 5, 6]
  return (
    <>
     { myArr2.map((val) => (
        <div key={val}>My Array value is {val}</div>
      ))}
    </>
  )
}

export default Count
