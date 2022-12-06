import React from "react";
import Home from "./components/Home";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Attendents from "./components/Attendents";
const App = () => {

  return <div>
    <Router>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/Attendents" element={<Attendents/>}/>

      </Routes>
    </Router>
  </div>
};


export default App;
