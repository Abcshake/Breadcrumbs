import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Breadcrumb from './components/Breadcrumb';
import Message from './components/Message';
import { useState,useEffect } from "react";


function App() {
const [crumbs, setCrumbs] = useState([]);

useEffect(() => {
  async function fetchCrumbs() {
    const response = await fetch('http://localhost:5000/breadcrumbs');
    const json = await response.json();
    setCrumbs(json);
    
  }
  fetchCrumbs();
  
}, []);

return (
  <>
    <Breadcrumb crumbs={crumbs}/>
    <Router>
      <Routes>
        {
        crumbs.map((crumb) => (
          <Route path={"/"+crumb.label} element={<Message message={crumb.message} />} />
        ))
        }
      </Routes>
    </Router>
    </>
  );
}

export default App;
