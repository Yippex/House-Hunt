import React from "react";

const Modal = ({ isVissible, onClose, children }) => {
  if (!isVissible) return true;

  return (
    <div>
      <div className="fixed inset-0 bg-black opacity-60"></div>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className=" p-8 rounded-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
          <div className="flex justify-end">
            <button
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              X
            </button>
          </div>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
