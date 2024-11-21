import React from 'react'

const RenderList = () => {
  const list = [
    {id:1, name:"Shree"},
    {id:2, name:"Ram"},
    {id:3, name:"Charan"},
    {id:4, name:"Narayan"},
  ]
  return (
    <>
    <h2>List Render</h2>
      {list.map((detail,index) => (
        <p key={index}>My id is {detail.id} and name is {detail.name}.</p>
      ))} 
    </>
  )
}

export default RenderList
