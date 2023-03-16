
import axios from "axios";
import React, { useState } from "react";
import supabase from '../../supabase/SupabaseConfig'
import {useNavigate} from 'react-router-dom'


const FileUploadForm = () => {
 const navigate = useNavigate()

  const [selectedFile, setSelectedFile] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [formError, setFormErro] = useState(null);
 

  const uploadImage = () => {
    

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "vpkmoowm");
    axios
      .post("https://api.cloudinary.com/v1_1/ddc5gysrg/image/upload", formData)
      .then((response) => {
        console.log(response);
      });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !price || !location || !desc) {
      setFormErro("Please fill all fields");
      return
    }
     

    const { data, error } = await supabase
    .from("Houses")
    .insert([{name, price, location, description}])
    if(error){
        console.log(error)
        setFormErro('Please fill all fields')
    }
    if(data){
        console.log(data)
        navigate('/admin')
    }
     
   }


  const submitAll = (event) => {
    uploadImage(event);
    handleSubmit(event);
  };

  return (
    <div className="w-full">
      <div>
        <form className="bg-white p-6 rounded-lg shadow-lg ">
          <div className="">
            <div className="mb-3">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="file"
              >
                Select a file
              </label>
              <input
                type="file"
                id="file"
                className="border border-gray-400 p-2 rounded-lg w-full"
                onChange={handleFileChange}
              />
              
            </div>
            <div className="mb-3 pt-2">
              <label htmlFor="" className="block font-medium">
                Name of Lodge
              </label>
              <input
                type="text"
                name=""
                id=""
                className="p-2 rounded-lg border border-gray-400 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="block font-medium">
                Location
              </label>
              <input
                type="text"
                className="p-2 rounded-lg border border-gray-400 w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="block font-medium">
                Price
              </label>
              <input
                type="number"
                className="p-2 rounded-lg border border-gray-400 w-full"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="block font-medium">
              Description
            </label>
            <input
              type="text"
              className="p-2 rounded-lg border border-gray-400 w-full "
              value={description}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          {formError && <p>{formError}</p>}
          <div className="mb-3">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 w-full px-4 rounded-lg hover:bg-blue-600"
              onClick={submitAll}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FileUploadForm;
