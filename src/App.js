import React,{useState} from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Loging from './Loging';
import Noti from './Noti';
import Home from './Home';
import Navigation from './Nav';
import Message from './Message';
import Container from 'react-bootstrap/Container'
import { ReactDOM } from 'react';
import './App.css';
// import 'antd/dist/antd.css';
// import { Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Button,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';

import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";


function App() {



  return (
    <Router>
    
    
    <Navigation/>
    
  <Switch>
  <Route path="/" exact component={Loging} /> 
      <Route path="/Home" component={Home} />
      <Route path="/Noti" component={Noti} />
      <Route path="/Message" component={Message} />
   </Switch>
  </Router>
  );
}

export default App;
