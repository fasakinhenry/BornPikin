import React from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here
    navigate("/dashboard");
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/2 max-w-sm mt-5">
        <h1 className="text-3xl font-bold mb-6 text-center">Join us today!</h1>
        <p className="text-gray-600 mb-4 text-center">
          Create an account with us first
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Fullname
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="fasakinhenry@gmail.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              placeholder="@hengsoft"
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
              Signup As
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
              <option>User</option>
              <option>Recycling company</option>
              <option>Collector/Intermediary</option>
            </select>
          </div>
          <div className="flex justify-between">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Country
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
                <option>Nigeria</option>
                {/* Add more country options */}
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                State
              </label>
              <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
                <option>Lagos</option>
                {/* Add more state options */}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Sign in
          </button>
          <p className="mt-4 text-sm text-gray-600 text-center">
            By creating an account, you agree to the Terms of Service and
            Privacy Policy
          </p>
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
