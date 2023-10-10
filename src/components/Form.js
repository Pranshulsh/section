// FormSection.js

import React, { useState } from "react";
import "./Form.css";

const Form = ({ selectedOption }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    password: "",
    address: "",
    street: "",
    state: "",
    landmark: "",
    pin: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    console.log("Updating data:", formData);
  };

  return (
    <div className="form-section">
      {/* <h2>{selectedOption}</h2> */}
      <h2>Profile Details</h2>
      <form>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact Details:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email Id:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Full Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Street/Town:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Landmark:
          <input
            type="text"
            name="landmark"
            value={formData.landmark}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Pin Code:
          <input
            type="text"
            name="pin"
            value={formData.pin}
            onChange={handleInputChange}
          />
        </label>
      </form>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Form;
