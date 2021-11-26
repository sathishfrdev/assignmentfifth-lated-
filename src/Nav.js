import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
// import 'antd/dist/antd.css';
// import { Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import { Button,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';
import { Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import {
  LikeOutlined,CommentOutlined ,SmileOutlined,HomeOutlined ,NotificationOutlined ,BellOutlined ,MailOutlined ,DislikeFilled,LikeFilled,DislikeOutlined,MessageOutlined,UserOutlined,HeartOutlined 

} from '@ant-design/icons';


function Navigation() {
    return (
        <div>
        <Navbar bg="light" expand="lg">
  <Container fluid>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
    
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      
      <Link to="/Home">   <Nav> Home <HomeOutlined /> </Nav></Link>
      <Link to="/Noti">     <Nav>Notification <BellOutlined /></Nav> </Link>
      <Link to="/Message">   <Nav>Message <MessageOutlined /></Nav></Link>
        
         
       
      </Nav>
      
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="danger">Search</Button>
      </Form>
    </Navbar.Collapse>

   
  </Container>
</Navbar>




        </div>


    )
}

export default Navigation
