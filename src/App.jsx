import React from 'react';
import "./App.css"
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default App;