import React, { useState } from "react";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import bgimg from '../img/bgimg.jpg'; // Background image import path
import video from '../img/IntroVideo.mp4'; // Video import path
import laptopimg from '../img/laptopimg.png'; // Laptop image import path
import { Link } from 'react-router-dom';

function Login() {
  const initialFormData = {
    email: "",
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
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    if (!formData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission (e.g., API call)
      console.log("Form submitted", formData);
      alert("User logged in successfully!");
      setErrors({});
      setFormData(initialFormData); // Reset form fields
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
        <div className="w-full max-w-md mx-4">
          <h1 className="text-1xl font-semibold  font-xs font-sans  text-sm mb-4 text-center mb-[10%] ">Log In to Your Account</h1>
          {/* <button className="w-full bg-white  border border-gray-300 py-1 px-1 rounded-md flex items-center justify-center mb-4 text-gray-700 font-xs font-sans  text-sm">
            <img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="Google Icon" className="w-5 h-6 mr-1 " />
            Continue with Google
          </button> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-gray-700 font-xs font-sans  text-sm">Email</label>
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
              <label className="block  mb-1 text-gray-700 font-xs font-sans  text-sm ">Password</label>
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
              <a href="#" className=" text-blue-600 hover:underline text-gray-700 font-xs font-sans  text-sm">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-1 px-2 rounded-md text-gray-700 font-xs font-sans  text-sm">Log In</button>
          </form>
          <p className="mt-4 text-center text-gray-700 font-xs font-sans  text-sm ">
            Don't have an account? <Link to="/" className="text-blue-600 hover:underline  font-xs font-sans  text-sm">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;





