import { useState } from "react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    // Abhi sirf demo message
    setMessage(
      "✅ If an account exists with this email, a password reset link will be sent."
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-100">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-gray-900">
          Forgot Password
        </h1>

        <p className="text-gray-500 text-center mt-3">
          Enter your registered email address to receive a password reset link.
        </p>

        <form onSubmit={handleReset} className="mt-8">

          <div className="flex items-center border rounded-xl px-4">

            <Mail className="text-gray-400" />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setMessage("");
              }}
              className="w-full p-4 outline-none"
              required
            />

          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Reset Password
          </button>

        </form>

        {message && (
          <p className="text-green-600 text-center mt-5">
            {message}
          </p>
        )}

        <p className="text-center mt-8 text-gray-500">
          Remember your password?
          <Link
            to="/login"
            className="text-blue-600 ml-2 hover:underline"
          >
            Back to Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default ForgotPassword;