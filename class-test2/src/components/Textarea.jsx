import React from 'react'

const Textarea = ({row,value,name,onChange,warning}) => {
  const handleC = (e) =>{
    onChange(name,e.target.value);
  }
  return (
    <>
    <label className="block text-gray-700 font-semibold mb-2">Comment: </label>
    <textarea rows={row} placeholder='Your comment here' value={value} onChange={handleC} name={name}  className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}></textarea>
    <h6 style={{ color:"red" }}>{warning}</h6>
    </>
  )
}

export default Textarea