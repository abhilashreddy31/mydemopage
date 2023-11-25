import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Home1 from './components/Home1/Home1';


const App = () => {
  return (
    <Router>
      
       {/* <Navbar></Navbar> */}
       <Home></Home>    
      
    </Router>
  );
};

export default App;
