import React from 'react'

const Login = () => {
  return (
    <div>

<div className="w-full">
      <div className="bg-rounded-sm flex flex-col justify-center items-center w-full">
        <div  className="w-[300px] md:w-96 bg-white px-6 py-3 rounded-lg shadow-2xl">
        <h1 className="text-center text-xl mb-4 font-bold">Login</h1>

        <form action="" >
          
          <div className="mb-3">
            <label htmlFor="" className="block">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              id="email"
              className="p-2 border border-slate-50 bg-slate-100 w-full rounded-lg"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="block">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="**********"
              className="p-2 border border-slate-50 bg-slate-100 w-full rounded-lg"
            />
          </div>
        
          <div className="mb-3">
            <button className="w-full bg-orange-400 text-white p-2 rounded-lg">Login</button>
            <p className="text-center mt-2">Don't have an account? Register here</p>
          </div>
        </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login