import React, { useState } from "react";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import bgimg from '../img/bgimg.jpg'; // Background image import path
import video from '../img/IntroVideo.mp4'; // Video import path
import laptopimg from '../img/laptopimg.png'; // Laptop image import path
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs'; // Import bcryptjs

function Signup() {
  const initialFormData = {
    region: "",
    email: "",
    username: "",
    password: "",
    rememberMe: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!formData.region) errors.region = "Region is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.username) errors.username = "Username is required";
    if (!formData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        // Hash the password before submitting
        const hashedPassword = await bcrypt.hash(formData.password, 10);
        const submissionData = { ...formData, password: hashedPassword };
        console.log("Form submitted", submissionData);
        alert("Registered Success verification Under procss!");
        setErrors({});
        setFormData(initialFormData); // Reset form fields
      } catch (error) {
        console.error("Error hashing the password", error);
      }
    }
  };

  return (
    <div className="flex h-screen font-sans">
      {/* Left Side with Background Image and Transparent Card */}
      <div className="relative w-3/5 flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
        <div className="relative bg-gray-600 backdrop-blur-sm bg-white/10 rounded-xl p-10 pt-20 pb-20 w-4/5 h-auto flex justify-center items-center ml-9 mr-9">
          <img src={laptopimg} alt="Laptop Frame" className="relative w-full h-auto z-6" />
          <video 
            src={video} 
            alt="Intro Video" 
            className="absolute inset-0 m-auto w-[66%] h-[54%] rounded-xl z-0" 
            controls
            autoPlay 
            loop 
            muted
          />
        </div>
      </div>
      
      {/* Right Side with Form */}
      <div className="w-2/5 flex justify-center items-center p-5">
        <div className="w-full max-w-md mx-8"> {/* Added mx-8 for left and right margin */}
          <h1 className="text-1xl font-bold mb-4 text-center font-sans mb-[10%]">Create an Account with XeLo</h1>
          {/* <button className="w-full bg-white text-black border border-gray-300 py-1 px-1 rounded-md flex items-center justify-center mb-4">
            <img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="Google Icon" className="w-5 h-6 mr-1 font-sans text-gray-700 font-sans font-light" />
           <label className="text-gray-700 font-xs font-sans  text-sm"> Continue with Google</label>
          </button> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-xs font-sans  text-sm mb-1 ">Select Region</label>
              <select
                name="region"
                className="w-full border border-gray-300 py-1 px-2 rounded-md bg-white text-gray-700 font-xs font-sans  text-sm"
                value={formData.region}
                onChange={handleChange}
              >
                <option value="" className="text-gray-700 font-xs font-sans  text-sm">Select a region</option>
                <option value="Indian" className="text-gray-700 font-xs font-sans  text-sm">Indian</option>
                <option value="American" className="text-gray-700 font-xs font-sans  text-sm">American</option>
                <option value="Africa" className="text-gray-700 font-xs font-sans  text-sm">Africa</option>
              </select>
              {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region}</p>}
            </div>
            <div className="mb-4">
              <label className="block  mb-1  text-gray-700 font-xs font-sans  text-sm">Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 py-1 px-2 rounded-md bg-white text-gray-700 font-xs font-sans  text-sm"
                placeholder="mail@abc.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label className="block  mb-1 text-gray-700 font-xs font-sans  text-sm">User Name</label>
              <input
                type="text"
                name="username"
                className="w-full border border-gray-300 py-1 px-2 rounded-md bg-white text-gray-700 font-xs font-sans  text-sm"
                placeholder="user"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-xs font-sans  text-sm ">Password</label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 py-1 px-2 rounded-md bg-white text-gray-700 font-xs font-sans  text-sm"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="form-checkbox"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <span className="ml-2 text-gray-700 font-xs font-sans  text-sm">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline text-gray-700  font-xs font-sans  text-sm">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-1 px-2 rounded-md text-gray-700 font-xs font-sans  text-sm">Create Account</button>
          </form>
          <p className="mt-4  text-center text-gray-700 font-xs font-sans  text-sm">
            Already have an account? <Link to="/Login" className="text-blue-600 hover:underline  font-xs font-sans  text-sm ">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
