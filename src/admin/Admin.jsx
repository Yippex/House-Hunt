import React, { useState } from "react";
import SideBar from "./SideBar/SideBar";
import Modal from "../Modal";
import FileUploadForm from "./FileUpload/FileUpload";

const Admin = () => {
  const [open, setOpen] = useState(null);
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <SideBar />
        <div className="flex-grow p-6">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setOpen(true)}
          >
            Add a New House
          </button>
          {/* <table>
        <thead>
          <tr>
            <th>Address</th>
            <th>Price</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((house) => (
            <tr key={house.id}>
              <td>{house.address}</td>
              <td>{house.price}</td>
              <td>{house.bedrooms}</td>
              <td>{house.bathrooms}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
        </div>
      </div>

      <Modal isVissible={open} onClose={() => setOpen(false)}>
        <FileUploadForm />
      </Modal>
    </>
  );
};

export default Admin;
