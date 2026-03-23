import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.password.length < 6) newErrors.password = "Password must be 6+ chars";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirm = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration Successful!");
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="register-container">
      <div className="form-card">
        <h1>Register</h1>
        <hr />
        <form onSubmit={validate}>
          <div className="input-group">
            <input type="text" name="name" placeholder="Name" onChange={handleChange} />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="input-group">
            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <input type="password" name="password" placeholder="Password" onChange={handleChange} />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-group">
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
            {errors.confirm && <span className="error">{errors.confirm}</span>}
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p className="footer-link">Have an Account? <a href="#">Login Here</a></p>
      </div>
    </div>
  );
};

export default Register;