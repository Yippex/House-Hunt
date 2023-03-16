import React, { useState } from "react";
import { Logo } from "../../assets/Images";
import Modal from "../../Modal";
import Login from "../form/Login";
import Register from "../form/Register";

const NavBar = () => {
  const [open, setOpen] = useState(null);
  const [modal2, setModal2] = useState(null);
  return (
    <>
      <div className="w-full  bg-zinc-100 shadow-lg h-20 ">
        <div className="container mx-auto ">

        <div className="flex items-center justify-between  ">
          <div>
            <img src={Logo} alt="" className="h-[4em]" />
          </div>
          <div className="flex gap-5">
            <button onClick={() => setModal2(true)}>Login</button>
            <button onClick={() => setOpen(true)}>Register</button>
          </div>
        </div>
      </div>
      </div>
      <Modal isVissible={open} onClose={() => setOpen(false)}>
       
        <Register />
      </Modal>
      <Modal isVissible={modal2} onClose={() => setModal2(false)}>
      <Login />
      </Modal>
    </>
  );
};

export default NavBar;
