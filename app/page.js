"use client";

import { useAuthContext } from "@/context/AuthContext";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuthContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.toLowerCase() === "admin@admin.com" &&
      password.toLowerCase() === "admin"
    ) {
      login({ email, password });
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect Login",
        text: "Click on email and password",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-300">
      <div className="h-[500px] bg-white w-11/12 sm:w-[450px] rounded-2xl p-8 flex justify-between flex-col">
        <div className="flex justify-center items-center gap-1">
          <span className="h-[40px] w-[5px] bg-orange-500"></span>
          <h1 className="uppercase font-semibold text-3xl">furkan store</h1>
        </div>
        <div className="text-center m-2">
          <h3 className="uppercase text-2xl font-semibold">sign in</h3>
          <p className="text-gray-400 text-sm">
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start gap-2 mt-2">
            <label
              htmlFor="email"
              className="cursor-pointer text-gray-500 hover:after:ml-2 hover:after:text-black hover:after:content-['admin@admin.com'] hover:after:underline"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 mt-2">
            <label
              htmlFor="password"
              className="cursor-pointer text-gray-500 hover:after:ml-2 hover:after:text-black hover:after:content-['admin'] hover:after:underline"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white uppercase w-full h-11 my-4"
          >
            sign in
          </button>
          <p className="text-center">
            <span className="text-gray-600 text-sm">Forgot your password?</span>
            <span className="text-orange-500 underline text-xs ml-1">
              Reset Password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
