import React, { useEffect, useState } from "react";
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

  const [storedData, setStoredData] = useState(null); 
  const [message, setMessage] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      try {
        setData(JSON.parse(savedData)); 
        setStoredData(JSON.parse(savedData)); 
      } catch (error) {
        console.error("Error parsing saved data:", error);
        localStorage.removeItem("formData"); 
      }
    }
  }, []);

  const handleChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {};
    if (!data.fname) newMessage.fname = "Full Name is required.";
    if (!data.email) newMessage.email = "Email is required.";
    if (!data.subject) newMessage.subject = "Subject is required.";
    if (!data.comment) newMessage.comment = "Comment is required.";

    setMessage(newMessage);

    if (Object.keys(newMessage).length === 0) {
      try {
        localStorage.setItem("formData", JSON.stringify(data));
        setStoredData(data); 
      } catch (error) {
        console.error("Error saving data to localStorage:", error);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <Header />
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
        <h3 className="text-lg font-semibold mb-4">Saved Data from Local Storage:</h3>
        {storedData ? (
          <>
            <p><strong>Full Name:</strong> {storedData.fname}</p>
            <p><strong>Email:</strong> {storedData.email}</p>
            <p><strong>Subject:</strong> {storedData.subject}</p>
            <p><strong>Comment:</strong> {storedData.comment}</p>
          </>
        ) : (
          <p>No data available in localStorage.</p>
        )}
      </div>
    </div>
  );
};

export default Form;
