import React, { useEffect } from "react";
import { useState } from "react";
import InputField from "./InputField";
import Textarea from "./Textarea";
import Button from "./Button";
import Header from "./Header";

const Form = () => {
  const [data, setData] = useState({
    fname: "",
    email: "",
    subject: "",
    comment: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if(savedData){
      setData(JSON.parse(savedData));
      localStorage.removeItem("formData"); 
    }
  },[])

  const handleChange = (field, value) => {
    setData((preData) => ({
      ...preData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
     e.preventDefault();
    const newMessage = {};
    if (data.fname === "") {
      newMessage.fname = "Fullname is required";
    }
    if (data.email === "") {
      newMessage.email = "Email is required";
    }
    if (data.subject === "") {
      newMessage.subject = "Subject is required";
    }
    if (data.comment === "") {
      newMessage.comment = "Comment is required";
    }
    setMessage(newMessage);
    if(Object.keys(newMessage).length === 0)
    {
      localStorage.setItem('formData', JSON.stringify(data));
      console.log("Form Data", data);
    }
  };
  return (
    <>
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <Header/>
        <InputField
        label="Full Name"
        name="fname"
        value={data.fname}
        onChange={handleChange}
        warning={message.fname}
      />

      <InputField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        warning={message.email}
      />

      <InputField
        label="Subject"
        name="subject"
        value={data.subject}
        onChange={handleChange}
        warning={message.subject}
      />

      <Textarea
        row={5}
        name="comment"
        value={data.comment}
        onChange={handleChange}
        warning={message.comment}
      />

      <Button handleSubmit={handleSubmit} text="Submit" />

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Form Data:</h3>
        <p><strong>Full Name:</strong> {data.fname || "N/A"}</p>
        <p><strong>Email:</strong> {data.email || "N/A"}</p>
        <p><strong>Subject:</strong> {data.subject || "N/A"}</p>
        <p><strong>Comment:</strong> {data.comment || "N/A"}</p>
      </div>
      
      </div>
    </>
  );
};

export default Form;
