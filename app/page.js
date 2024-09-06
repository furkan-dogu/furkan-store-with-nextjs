"use client";

import useAuthCalls from "@/hooks/useAuthCalls";
import { useState } from "react";

export default function Home() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const { login } = useAuthCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(info);   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-300">
      <div className="h-[500px] bg-white w-11/12 sm:w-[450px] rounded-2xl p-8 flex justify-between flex-col">
        <div className="flex justify-center items-center gap-1">
          <span className="h-[40px] w-[5px] bg-orange-500"></span>
          <h1 className="uppercase font-semibold md:text-3xl text-2xl">furkan store</h1>
        </div>
        <div className="text-center m-2">
          <h3 className="uppercase md:text-2xl text-xl font-semibold">sign in</h3>
          <p className="text-gray-400 md:text-sm text-xs">
            Enter your credentials to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-start gap-2 mt-2">
            <label
              htmlFor="email"
              className="cursor-pointer text-gray-500 hover:after:ml-2 hover:after:text-black hover:after:content-['guest@site.com'] hover:after:underline"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="login-input"
              value={info.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 mt-2">
            <label
              htmlFor="password"
              className="cursor-pointer text-gray-500 hover:after:ml-2 hover:after:text-black hover:after:content-['guest'] hover:after:underline"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="login-input"
              value={info.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white uppercase w-full h-11 my-4"
          >
            sign in
          </button>
          <p className="text-center">
            <span className="text-gray-600 md:text-sm text-xs">Forgot your password?</span>
            <span className="text-orange-500 underline md:text-xs text-[0.7rem] ml-1">
              Reset Password
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
