import React from "react";
import {Link} from 'react-router-dom'
import {Logo} from '../../assets/Images'

const SideBar = () => {
  return (
    <div>
      <div className="fixed left-0 top-0 h-full w-48 bg-gray-900 text-white flex flex-col">
        <div className="p-4">
          <img src={Logo} alt=""  className="h-10"/>
        </div>
        <ul className="flex-grow">
          <li className="px-4 py-2 hover:bg-gray-800">
            <Link to='/admin' className="block">
              Dashboard
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <a href="#" className="block">
              Projects
            </a>
          </li>
          <li className="px-4 py-2 hover:bg-gray-800">
            <a href="#" className="block">
              Teams
            </a>
          </li>
        </ul>
        <div className="p-4 border-t border-gray-800">
          <p className="text-sm">Logged in as:</p>
          <p className="font-semibold">Dash</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
