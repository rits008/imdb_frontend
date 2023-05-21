import React, { useState } from "react";

import "./styles/producer_creation.css";
function ProducerCreation() {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    dob: undefined,
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:58873/producers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("created");
      } else {
        console.log("else");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <button
          type="button"
          className="btn btn-light mb-4"
          id="producer-close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="producer-container">
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="form-group pb-4">
              <label htmlFor="exampleInputName">producer Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                placeholder="Enter producer Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group pb-4">
              <label htmlFor="exampleInputBio">Bio</label>
              <textarea
                className="form-control"
                id="exampleInputBio"
                rows="3"
                placeholder="Enter Bio Here"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group pb-4">
              <label htmlFor="exampleInputDateofBirth">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputDateofBirth"
                placeholder=""
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group pb-4">
              <label htmlFor="exampleInputGender">Gender</label>
              <select
                className="form-control"
                id="exampleInputGender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProducerCreation;
