import React from 'react'

const Button = ({handleSubmit, text}) => {
  return (
    <>
    <button onClick={handleSubmit}  className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">{text}</button>
    </>
  )
}

export default Button