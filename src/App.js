import React from "react";

// custom pages
import BasePage from "./pages/BasePage";
import Login from './pages/Login'
import Register from "./pages/Register";
import StudentPage from "./pages/StudentPage";
import JoinRoom from "./pages/JoinRoom";
import Form from "./pages/form/Form";
import ResultPage from "./pages/Result";

// hooks
import { useState } from "react";

// styles
import "./App.css";
import { Route, Link, Routes, BrowserRouter } from 'react-router-dom'  

const App = () => {
  const [role, updateRole] = useState('')
  const [happinessIndex,updateHappinessIndex] = useState('')

  return (
    <div className="w-screen h-screen ">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<BasePage updateRole={updateRole}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/student' element={<StudentPage/>}></Route>
            <Route path='/joinroom' element={<JoinRoom/>}></Route>
            <Route path='/form' element={<Form updateHappinessIndex={updateHappinessIndex}/>}></Route>
            <Route path='/result' element={<ResultPage hIndex={happinessIndex}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
