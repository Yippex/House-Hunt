import React, {useState}from "react";
import FileUpload from '../FileUpload/FileUpload';
import Modal from '../../Modal'
const Dashboard = () => {
  const [openModal, setOpenModal] = useState();
  return (
    <>
      <div className="w-full">
        <div className="flex justify-center items-center">
        <button onClick={() => setOpenModal(true)}>Upload a New House</button>

        </div>

      </div>

      <Modal onClose={() => setOpenModal(false)} isVissible={openModal}>
        <FileUpload/>
      </Modal>
    </>
  );
};

export default Dashboard;
