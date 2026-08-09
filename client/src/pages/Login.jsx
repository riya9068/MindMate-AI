import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import API from "../api/api";
import { useAuthActions } from "@convex-dev/auth/react";

const Login = () => {


  const navigate = useNavigate();
  const { signIn } = useAuthActions();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState("");



//   const handleLogin = async(e)=>{

//     e.preventDefault();


//     try{


//       const response = await API.post("/auth/login",{

//         email,
//         password

//       });



//       // STEP 1: Save Token

//       localStorage.setItem(
//         "token",
//         response.data.token
//       );



//       // Save User Details

//       localStorage.setItem(
//         "user",
//         JSON.stringify(response.data.user)
//       );



//       // Go Dashboard

//       navigate("/dashboard");


//     }

//     catch(error){

//       console.log(error);

//       setError(
//         error.response?.data?.message ||
//         "Login failed"
//       );

//     }


//   };
const handleLogin = async(e)=>{

e.preventDefault();

try{

 await signIn("password",{
   email,
   password,
   flow:"signIn",
 });

 navigate("/dashboard");

}
// catch(error){

//  console.log(error);

//  setError(
//    error.message || "Login failed"
//  );

// }
catch (error) {
  console.error(error);

  if (
    error.message?.includes("InvalidSecret") ||
    error.message?.includes("Invalid")
  ) {
    setError("❌ Invalid email or password.");
  } else if (
    error.message?.includes("NotFound")
  ) {
    setError("❌ Account not found.");
  } else {
    setError("❌ Something went wrong. Please try again.");
  }
}

};




return (

<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">


<div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">



<h1 className="text-4xl font-bold text-center text-gray-900">

Welcome Back

</h1>



<p className="text-gray-500 text-center mt-3">

Login to your MindMate AI account

</p>




<form 
onSubmit={handleLogin}
className="mt-8 space-y-5"
>



<div className="flex items-center border rounded-xl px-4">


<Mail className="text-gray-400"/>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>{setEmail(e.target.value);
  setError("");}}

className="w-full p-4 outline-none"

/>


</div>





<div className="flex items-center border rounded-xl px-4">


<Lock className="text-gray-400"/>


<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>{setPassword(e.target.value);
  setError("");}}

className="w-full p-4 outline-none"

/>


</div>



{
error &&

<p className="text-red-500 text-center">
{error}
</p>

}




<button

type="submit"

className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"

>

Login

</button>
<div className="text-right mt-4">
  <Link
    to="/forgot-password"
    className="text-blue-600 hover:underline text-sm"
  >
    Forgot Password?
  </Link>
</div>
{/* <Link
to="/login"
className="bg-blue-600 text-white px-8 py-3 rounded-full"
>
Login
</Link> */}


</form>





<p className="text-center mt-6 text-gray-500">


Don't have an account?


{/* <a 
href="/register"
className="text-blue-600 cursor-pointer ml-2"
>

Register

</a> */}
<Link
  to="/register"
  className="text-blue-600 ml-2"
>
  Register
</Link>


</p>




</div>


</div>

);


};


export default Login;