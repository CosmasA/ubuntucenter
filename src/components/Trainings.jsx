import React, { useState } from "react";

const Trainings = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    state: "",
    course: "",   // ✅ add course field
  });

  const trainingsList = [
    { id: 1, title: "Robotics Training", registerLink: "#", payLink: "#" },
    { id: 2, title: "AI Governance", registerLink: "#", payLink: "#" },
    { id: 3, title: "AI Ethics", registerLink: "#", payLink: "#" },
    { id: 4, title: "AI Innovation", registerLink: "#", payLink: "#" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`You registered for: ${formData.course}`);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      district: "",
      state: "",
      course: "",
    });
  };

  return (
    <section id="trainings" className="trainings-section">
      <div className="container section-title">
        <h2>Trainings</h2>
        <p>
          Register for upcoming trainings on Robotics, AI governance, ethics, and innovation.
        </p>
      </div>

      <div className="container trainings-container">

        {/* Registration form */}
        <form className="training-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number (+Country Code)"
            required
          />

          <div className="form-row">
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="District"
              required
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="State/Region"
              required
            />
          </div>

          {/* ✅ Course select dropdown */}
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Course --</option>
            {trainingsList.map((training) => (
              <option key={training.id} value={training.title}>
                {training.title}
              </option>
            ))}
          </select>

          <button type="submit" className="btn btn-cta">
            Register & Pay
          </button>
        </form>
      </div>
    </section>
  );
};

export default Trainings;
