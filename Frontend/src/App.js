import React from 'react'
import './App.css';
import Login from './Login';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup'
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>} index></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
  </Routes>
</BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/login' element={<Login/>}></Route>
    //     <Route path='/signup' element={<Signup/>}></Route>
    //     <Route path='/home' element={<Home/>}></Route>
    //   </Routes>
    //   <Login/>
    // </BrowserRouter>
  );
}

export default App;
