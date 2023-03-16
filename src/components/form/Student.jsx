import React from "react";

const Student = () => {
  return (
    <div className="w-full container">
      <form action="" className="top-[5% px-4]">
        <div className="mb-3">
          <label htmlFor="" className="block">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="p-2 border border-slate-100 bg-slate-200 w-full rounded-lg"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            id="email"
            className="p-2 border border-slate-100 bg-slate-200 w-full rounded-lg"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            className="p-2 border border-slate-100 bg-slate-200 w-full rounded-lg"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="block">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirm password"
            id="confirm password"
            className="p-2 border border-slate-100 bg-slate-200 w-full rounded-lg"
          />
        </div>
        <div className="mb-3">
          <button className="w-full bg-orange-400 text-white p-2 rounded-lg">
            Register
          </button>
          <p className="text-center mt-2">
            Have an account?{" "}
            <span className="text-orange-400 italic underline">Login here</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Student;
