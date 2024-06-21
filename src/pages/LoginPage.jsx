import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-3xl font-bold mb-6">Welcome back!</h1>
      <p className="text-gray-600 mb-4">Please enter your details!</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="fasakinhenry@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Account Type
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
            <option>Mother / Pregnant women</option>
            <option>Hospitals / clinic</option>
            <option> Specialist / Doctor</option>
            <option>Community Health workers</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
        >
          Sign in
        </button>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
