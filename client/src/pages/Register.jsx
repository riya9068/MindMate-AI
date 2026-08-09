import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

import { useNavigate } from "react-router-dom";
// import API from "../api/api";
import { useAuthActions } from "@convex-dev/auth/react";

const Register = () => {

 
  const navigate = useNavigate();
  const { signIn } = useAuthActions();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");



  const handleRegister = async (e) => {
    e.preventDefault();
    try {

    //   setError("");


      await signIn("password", {
        flow: "signUp",
        name: name,
        email,
        password
      });


      alert("Account created successfully!");

      navigate("/dashboard") ;


    } catch (err) {

      console.log(err);

    //   setError(
    //     err.message || "Registration Failed"
    //   );

    }

  };
// const handleRegister = async (e) => {

//   e.preventDefault();

//   try {

//     setError("");

//     const response = await API.post("/auth/register", {

//       name,
//       email,
//       password,

//     });

//     localStorage.setItem(
//       "token",
//       response.data.token
//     );

//     localStorage.setItem(
//       "user",
//       JSON.stringify(response.data.user)
//     );

//     navigate("/dashboard");

//   } catch (err) {

//     console.log(err);

//     setError(
//       err.response?.data?.message ||
//       "Registration Failed"
//     );

//   }

// };



  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">


      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">


        <h1 className="text-4xl font-bold text-center text-gray-900">
          Create Account
        </h1>


        <p className="text-gray-500 text-center mt-3">
          Join MindMate AI and start your wellness journey
        </p>



        {/* <div className="mt-8 space-y-5"> */}

        <form onSubmit={handleRegister} className="mt-8 space-y-5">

          {/* Name */}

          <div className="flex items-center border rounded-xl px-4">

            <User className="text-gray-400"/>

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full p-4 outline-none"
            />

          </div>

          {/* Email */}

          <div className="flex items-center border rounded-xl px-4">

            <Mail className="text-gray-400"/>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full p-4 outline-none"
            />

          </div>

          {/* Password */}

          <div className="flex items-center border rounded-xl px-4">

            <Lock className="text-gray-400"/>

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="w-full p-4 outline-none"
            />

          </div>

          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Create Account
          </button>

        </form>

        <p className="text-center mt-6 text-gray-500">

          Already have an account?

          <a
            href="/login"
            className="text-blue-600 ml-2"
          >
            Login
          </a>

        </p>



      </div>


    </div>
    

  );

};


export default Register;