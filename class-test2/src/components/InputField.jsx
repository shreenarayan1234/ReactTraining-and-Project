import React from 'react'

const InputField = ({label,name,value,onChange, warning}) => {
  const handleC = (e) => {
    onChange(name,e.target.value);
  }
  return (
    <div>
      <form>
      <label className="block text-gray-700 font-semibold mb-2">
        {label}:
        <input type='text' name={name} value={value} onChange={handleC} className={`w-full p-2 border rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500`}/>
      </label>
      <h6 className="text-red-500 text-sm mt-1">{warning}</h6>
      </form>
    </div>
  )
}

export default InputField