import React, { useState } from "react";
import supabase from "../../supabase/SupabaseConfig";


const Student = () => {
  
  const initialvalues = { name: "", email: "", password: "" };
  const [formvalues, setFormvalues] = useState(initialvalues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };
  console.log(formvalues)

  async function handleSubmit(e) {
    e.preventDefault();
    

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formvalues.email,
        password: formvalues.password,
        options: {
          data: {
            full_name: formvalues.name,
          },
        },
      });
      alert('check your email for verification')
    } catch (error) {
      console.log(error)
      console.log(data)
    }
  }


  return (
    <div className="w-full container">
      <form action="" onSubmit={handleSubmit} className="top-[5% px-4]">
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
            onChange={handleChange}
            value={formvalues.name}
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
            onChange={handleChange}
            value={formvalues.email}
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
            onChange={handleChange}
            value={formvalues.password}
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
