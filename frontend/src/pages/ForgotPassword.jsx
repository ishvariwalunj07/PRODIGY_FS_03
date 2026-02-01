import React, { useState } from "react";
import API from "../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/user/forgot-password", { email });

      if (res.data.success) {
        toast.success("Password reset link sent to your email");
        navigate("/login"); // ✅ back to login
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-[70vh]">
      <form onSubmit={handleSubmit} className="w-96 border p-6">
        <h2 className="text-xl font-semibold mb-4">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="border w-full mb-3 p-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button className="bg-black text-white w-full py-2">
          Send Reset Link
        </button>

        <p
          onClick={() => navigate("/login")}
          className="text-sm mt-3 cursor-pointer text-blue-600"
        >
          Back to Login
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
