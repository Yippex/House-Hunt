import React, { useState } from "react";
import Agent from "./Agent";
import Student from "./Student";


const Register = () => {
  const [action, setAction] = useState("Student");


  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <div className=" container bg-white px-8 py-2 rounded-lg shadow-2xl">
          <h1 className="text-center text-xl mb-4 font-bold">Register Here</h1>
          <div className="flex justify-between mb-3">
            <p
              className="border-black border-b-2 cursor-pointer"
              onClick={() => setAction("Student")}
            >
              Student
            </p>
            <p
              className="border-black border-b-2 cursor-pointer"
              onClick={() => setAction("Agent")}
            >
              Agent
            </p>
          </div>
          {action === "Student" ? <Student /> : <Agent />}
        </div>
      </div>
    </div>
  );
};

export default Register;
