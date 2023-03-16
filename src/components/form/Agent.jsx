import React from "react";

const Agent = () => {
  return (
    <div className="container">
      <form action="" className="top-[10% px-4]">
        <div className="mb-2">
          <label htmlFor="" className="block">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="p-2 border border-blue-600 w-full rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="block">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            id="email"
            className=" p-2 border border-blue-600 w-full rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="block">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            className="p-2 border border-blue-600 w-full rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="block">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirm password"
            id="confirm password"
            className="p-2 border border-blue-600 w-full rounded-lg"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="" className="block">
            Campus:
          </label>
          <input
            type="text"
            name="Campus"
            id="confirm password"
            className="p-2 border border-blue-600 w-full rounded-lg"
            placeholder="Gk capmus"
          />
        </div>

        <div className="mb-2">
          <button className="w-full bg-blue-500 text-white p-2 rounded-lg">
            Register
          </button>
          <p className="text-center mt-2">Have an account? Login here</p>
        </div>
      </form>
    </div>
  );
};

export default Agent;
