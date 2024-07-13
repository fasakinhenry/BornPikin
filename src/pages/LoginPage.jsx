//import React from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [accountType, setAccountType] = useState("");
//   const [error, setError] = useState(null);
//   const [token, setToken] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform login logic here
//         axios.post("/login/", { email, password, accountType })
//       .then((response) => {
//         const { data } = response;
//         setToken(data.token);
//         // Store the token in local storage or cookies
//         localStorage.setItem("token", data.token);
//         navigate("/dashboard");
//       })
//       .catch((error) => {
//         setError(error.response.data.error);
//       });
//   };

//   return (
//     <div className="w-full max-w-sm">
//       <h1 className="text-3xl font-bold mb-6">Welcome back!</h1>
//       <p className="text-gray-600 mb-4">Please enter your details!</p>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="fasakinhenry@gmail.com"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
//           />
//         </div>
//         <div>
//           <label className="block mb-2 text-sm font-medium text-gray-700">
//             Account Type
//           </label>
//           <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500">
//             <option>Mother / Pregnant women</option>
//             <option>Hospitals / clinic</option>
//             <option> Specialist / Doctor</option>
//             <option>Community Health workers</option>
//           </select>
//         </div>
//         <div className="flex items-center justify-between">
//           <a href="#" className="text-sm text-blue-500 hover:underline">
//             Forgot Password?
//           </a>
//         </div>
//         <button
//           type="submit"
//           className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
//         >
//           Sign in
//         </button>
//         <p className="mt-4 text-sm text-gray-600 text-center">
//           Don’t have an account?{" "}
//           <a href="#" className="text-blue-500 hover:underline">
//             Sign Up
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://bornpikin-backend-3.onrender.com/user-auth/login/", { email, password, accountType })
      .then((response) => {
        const { data } = response;
        setToken(data.token);
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };

  return (
    <div className="w-full max-w-sm">
      <img src="path/to/logo.png" alt="BornPikin Logo" className="w-10 h-10 mr-2" />
        <h6 className='text-purple-800 text-center'>
          <span className="text-purple-700">Born</span>
          <span className="text-black">Pikin</span>
        </h6>
      <h1 className="text-3xl font-bold mb-6">Welcome back!</h1>
      <p className="text-gray-600 mb-4">Please enter your details!</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-purple-800">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="fasakinhenry@gmail.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-purple-800">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-purple-800">
            Account Type
          </label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          >
            <option>Mother / Pregnant women</option>
            <option>Hospitals / clinic</option>
            <option>Specialist / Doctor</option>
            <option>Community Health workers</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-purple-600 hover:underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-purple-600  text-white rounded-md hover:bg-purple-600  focus:outline-none focus:bg-purple-700"
        >
          Sign in
        </button>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account?{" "}
          <Link to='/signup' className="text-purple-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
