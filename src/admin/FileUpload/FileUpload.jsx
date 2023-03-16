
import axios from "axios";
import React, { useState } from "react";
import supabase from '../../supabase/SupabaseConfig'


const FileUploadForm = () => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [formError, setFormErro] = useState(null);
 

  
  const handleImageUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", 'vpkmoowm');
  
    try {
      const res = await axios.post( 'https://api.cloudinary.com/v1_1/ddc5gysrg/image/upload',formData);
      const imageUrl = res.data.secure_url;
      setImageUrl(imageUrl);
    } catch (err) {
      console.error(err);
    }
  };
  

 

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    if (!title || !price || !location || !description) {
      setFormErro("Please fill all fields");
      return
    }
     
  
      
          const { data, error } = await supabase
          .from('Houses')
          .insert([{title, price, location, description, image_url:imageUrl}])
          if(error){
              console.log(error)
              setFormErro('Please fill all fields')
          }
          if(data){
              console.log(data)
              setFormErro(null)
          }

   
  
    
     
   }


 
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <form className="bg-wh rounded-lg shadow-lg " onSubmit={handleSubmit}>
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
                onChange={handleImageUpload}
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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          {formError && <p>{formError}</p>}
          <div className="mb-3">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 w-full px-4 rounded-lg hover:bg-blue-600"
              
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
