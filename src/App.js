import React from "react";
import "./App.css"
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home/home";
import { SQuiz } from "./screencomponentes/q-app";

function Quiz(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/quiz" element={<SQuiz/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export{Quiz}