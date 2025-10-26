import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Addblog from './component/Addblog';
import Showblogs from './component/Showblogs';
import Updateblog from './component/Updateblog';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/add' element={<Addblog/>}/>
          <Route path='/:id' element={<Showblogs/>}/>
          <Route path='/edit/:id' element={<Updateblog/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
