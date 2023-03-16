import React, { useState } from "react";
import supabase from "../../supabase/SupabaseConfig";
import { useNavigate } from "react-router-dom";

const Agent = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    campus: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name,
            campus: formData.campus,
          },
        },
      });
      alert("check your email for verification");
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit} className="top-[10% px-4]">
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
