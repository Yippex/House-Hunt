import React from 'react'
import{Route, Routes, useLocation} from 'react-router-dom'
import Admin from '../admin/Admin'
import FileUploadForm from '../admin/FileUpload/FileUpload'
import Home from '../components/Home/Home'
import NavBar from '../components/Navbar/NavBar'



const Pages = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1]


  
  return (
    <>
    {path.toLocaleLowerCase() ==='admin' ? null:<NavBar/>}
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/upload' element={<FileUploadForm/>}/>
    </Routes>
    </>
    
  )
}

export default Pages