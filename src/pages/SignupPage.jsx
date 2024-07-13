//import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SignupPage = () => {
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const fullname = formData.get('fullname');
//     const email = formData.get('email');
//     const username = formData.get('username');
//     const password = formData.get('password');
//     const accountType = formData.get('accountType');
//     const country = formData.get('country');
//     const state = formData.get('state');

//     // Validate input data
//     const errors = {};
//     if (!fullname) {
//       errors.fullname = 'Required';
//     }
//     if (!email) {
//       errors.email = 'Required';
//     }
//     if (!username) {
//       errors.username = 'Required';
//     }
//     if (!password) {
//       errors.password = 'Required';
//     }
//     if (!accountType) {
//       errors.accountType = 'Required';
//     }
//     if (!country) {
//       errors.country = 'Required';
//     }
//     if (!state) {
//       errors.state = 'Required';
//     }

//     if (Object.keys(errors).length > 0) {
//       // Display error messages to the user
//       console.error(errors);
//       return;
//     }

//     // Make HTTP request to signup endpoint


//     const handleRegister = async () => {
//       try {
//         const response = await axios.post('/register/', {
//           fullname,
//           email,
//           username,
//           password,
//           accountType,
//           country,
//           state,
//         });
//         const data = response.data;
//         if (data.success) {
//           navigate('/dashboard');
//         } else {
//           console.error(data.error);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
    
//     };
  

//   return (
//     <div className='w-full flex justify-center items-center'>
//       <div className='w-1/2 max-w-sm mt-5'>
//         <h1 className='text-3xl font-bold mb-6 text-center'>
//           Welcome back Mama!
//         </h1>
//         <p className='text-gray-600 mb-4 text-center'>
//           Create an account with us first
//         </p>
//         <form onSubmit={handleSubmit} className='space-y-4'>
//           <div>
//             <label className='block mb-2 text-sm font-medium text-gray-700'>
//               Fullname
//             </label>
//             <input
//               type='text'
//               placeholder='John Doe'
//               className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
//             />
//           </div>
//           <div>
//             <label className='block mb-2 text-sm font-medium text-gray-700'>
//               Email Address
//             </label>
//             <input
//               type='email'
//               placeholder='fasakinhenry@gmail.com'
//               className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
//             />
//           </div>
//           <div>
//             <label className='block mb-2 text-sm font-medium text-gray-700'>
//               Username
//             </label>
//             <input
//               type='text'
//               placeholder='@hengsoft'
//               className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
//             />
//           </div>
//           <div>
//             <label className='block mb-2 text-sm font-medium text-gray-700'>
//               Password
//             </label>
//             <input
//               type='password'
//               placeholder='Password'
//               className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
//             />
//           </div>
//           <div>
//             <label className='block mb-2 text-sm font-medium text-gray-700'>
//               Account Type
//             </label>
//             <select className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'>
//               <option>Mother / Pregnant women</option>
//               <option>Hospitals / clinic</option>
//               <option> Specialist / Doctor</option>
//               <option>Community Health workers</option>
//             </select>
//           </div>
//           <div className='flex justify-between'>
//             <div>
//               <label className='block mb-2 text-sm font-medium text-gray-700'>
//                 Country
//               </label>
//               <select className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'>
//                 <option>Nigeria</option>
//                 {/* Add more country options */}
//               </select>
//             </div>
//             <div>
//               <label className='block mb-2 text-sm font-medium text-gray-700'>
//                 State
//               </label>
//               <select className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'>
//                 <option>Lagos</option>
//                 {/* Add more state options */}
//               </select>
//             </div>
//           </div>
//           <button
//             type='submit'
//             className='w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700'
//           >
//             Sign in
//           </button>
//           <p className='mt-4 text-sm text-gray-600 text-center'>
//             By creating an account, you agree to the Terms of Service and
//             Privacy Policy
//           </p>
//           <p className='text-sm text-gray-600 text-center'>
//             Already have an account?{' '}
//             <a href='#' className='text-blue-500 hover:underline'>
//               Sign In
//             </a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignupPage;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const SignupPage = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input data
    const errors = {};
    if (!fullname) {
      errors.fullname = 'Required';
    }
    if (!email) {
      errors.email = 'Required';
    }
    if (!username) {
      errors.username = 'Required';
    }
    if (!password) {
      errors.password = 'Required';
    }
    if (!accountType) {
      errors.accountType = 'Required';
    }
    if (!country) {
      errors.country = 'Required';
    }
    if (!state) {
      errors.state = 'Required';
    }

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/user-auth/register/', {
        fullname,
        email,
        username,
        password,
        accountType,
        country,
        state,
      });
      const data = response.data;
      if (data.success) {
        navigate('/dashboard');
      } else {
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-1/2 max-w-sm mt-5'>
      <img src="path/to/logo.png" alt="BornPikin Logo" className="w-10 h-10 mr-2" />
        <h6 className='text-purple-800 text-center'>
          <span className="text-purple-700">Born</span>
          <span className="text-black">Pikin</span>
        </h6>
        <h1 className='text-3xl font-bold mb-6 text-center'>
          Welcome, Mama!
        </h1>
        <p className='text-gray-600 mb-4 text-center'>
          Fill in your details make we start
        </p>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block mb-2 text-sm font-medium text-purple-800'>
              Fullname
            </label>
            <input
              type='text'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder='John Doe'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-purple-800'>
              Email Address
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='fasakinhenry@gmail.com'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-purple-800'>
              Username
            </label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='@hengsoft'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-purple-800'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium text-purple-800'>
              Account Type
            </label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
            >
              <option>Mother / Pregnant women</option>
              <option>Hospitals / clinic</option>
              <option>Specialist / Doctor</option>
              <option>Community Health workers</option>
            </select>
          </div>
          <div className='flex justify-between'>
            <div>
              <label className='block mb-2 text-sm font-medium text-purple-800'>
                Country
              </label>
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
              >
                <option>Nigeria</option>
                {/* Add more country options */}
              </select>
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-purple-800'>
                State
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500'
              >
                <option>Lagos</option>
                {/* Add more state options */}
              </select>
            </div>
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 bg-purple-600 text-white rounded-md shadow-sm hover:bg-purple-700 focus:outline-none focus:bg-purple-700'
          >
            Sign in
          </button>
          <p className='mt-4 text-sm text-gray-600 text-center'>
            By creating an account, you agree to the Terms of Service and
            Privacy Policy
          </p>
          <p className='text-sm text-gray-600 text-center'>
            Already have an account?{' '}
            <Link to='/signup' className="text-purple-600 hover:underline">
            Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
