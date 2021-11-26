import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
// import 'antd/dist/antd.css';
// import { Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {
  LikeOutlined,CommentOutlined ,SmileOutlined,HomeOutlined ,NotificationOutlined ,BellOutlined ,MailOutlined ,DislikeFilled,LikeFilled,DislikeOutlined,MessageOutlined,UserOutlined,HeartOutlined 

} from '@ant-design/icons';

import { Card ,Avatar} from 'antd';
import { Image } from 'antd';
import moment from 'moment';
import Icon from '@ant-design/icons';
import {  Input} from 'antd';


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap';

// import Card from 'react-bootstrap/Card'

import Navbar from 'react-bootstrap/Navbar'
import {BrowserRouter as Router, Route, Link ,NavLink, Switch} from 'react-router-dom'

var oneDate = moment();
    var month = oneDate.format('DD-MMM');


function Home() {


    const objects1 = [
        {
           id: 1,
           
           logo: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
       
           quotes:"Just when the caterpillar thought the world was ending, he turned into a butterfly.",
           avatar:"https://joeschmoe.io/api/v1/random",
       title:"hellow welcome here",
         },
       ]
    
       const objects2=[
        {
           id: 2,
           
           logo: "https://i.pinimg.com/originals/61/63/06/6163060a0048b875d224ccbf806b9cba.jpg",
       
           quotes:"ife is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn’t mean",
           avatar:"https://joeschmoe.io/api/v1/random",
       title:"hellow welcome two"
         },
       ]
    
       const objects3=[
    
        {
            id: 3,
            
            logo: "https://editaphotography.in/wp-content/uploads/2020/09/Baby_photo_shoot_baby_girl_Edita_photography_Pune_006-thegem-gallery-masonry.jpg",
        
            quotes:"“You only live once, but if you do it right, once is enough.”",
            avatar:"https://joeschmoe.io/api/v1/random",
        title:"hellow welcome three"
          },
    
       ]
       const object4=[
           {
            id: 3,
            
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZ6WjUomHM67NhIP3vEVmEH-M-3B6x_jWFg&usqp=CAU",
        
            quotes:"“Many of life’s failures are people who did not realize how close they were to success when they gave up.”",
            avatar:"https://joeschmoe.io/api/v1/random",
        title:"hellow welcome four"
           }
       ]
       const object5=[
        {
         id: 3,
         
         logo: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
     
         quotes:"Just when the caterpillar thought the world was ending, he turned into a butterfly.",
         avatar:"https://joeschmoe.io/api/v1/random",
     title:"hellow welcome here"
    
        }
    ]
    
    

    return (
        <div className="bg_color">   
    
       
    <Container >
    
      <Row className="d-flex justify-content-center">
      
    <br/>
       <Col xs={8} >
     
        <div className="d-flex justify-content-center" >
    
        <Card   bordered={false} style={{ width: 550 ,marginTop:10}}>
    
     
    
      <Row xs="auto">
      <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
      
      <Col >
      <Input placeholder="What happening?"  bordered={false} />
        </Col>
     
    </Row>
    
    
    </Card>
    
        </div>
    <br/><br/>
        <div className="d-flex justify-content-center" >
    <br/>
    
    
    {objects1.map((data)=>{
    return(
    <>
    <Card style={{ width: 550 }} bodyStyle={{ padding: 0 }}>

        <div className="custom-card" style={{padding:20 }}>
    
      
    
        <Row xs="auto">
        <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
        <Col><h4>{data.title}</h4></Col>
       
      </Row>
      <h5>12 jun</h5>
      <br/>
        
        
        
    
        
        
        
    
        
      
        
        
          <p>{data.quotes}</p>
    
        </div>
        <div className="custom-image">
          <img alt="example" width="100%" src={data.logo} />
        </div>
        <br/>
        <div className="alignlft" style={{padding:20 }}>
        <Row xs="auto">
        <Col><HeartOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
        <Col><CommentOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
        
      </Row>
       
      <br/>
      <Row xs="auto">
        <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
        
        <Col >
        <Form.Control type="text" placeholder="Normal text" />
          </Col>
       
      </Row>
        </div>
    
        
        <br/>
      </Card>
    
    </>
    
    )
    })}
    
    
    
    
      
    
    
    
        
    
        
    
        </div>
        <br/>
        <div className="d-flex justify-content-center" >
        {objects2.map((data)=>{
          return(
          <>
          <Card style={{ width: 550  }} bodyStyle={{ padding: 0 }}>
              <div className="custom-card" style={{padding:20 }}>
              <Row xs="auto">
              <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
              <Col><h4>{data.title}</h4></Col>
             
            </Row>
            <h5>12 jun</h5>
              
              
                <p>{data.quotes}</p>
          
              </div>
              <div className="custom-image">
                <img alt="example" width="100%" src={data.logo} />
              </div>
              <br/>
              <div className="alignlft" style={{padding:20 }}>
              <Row xs="auto">
              <Col><HeartOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
              <Col><CommentOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
              
            </Row>
             
            <br/>
            <Row xs="auto">
              <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
              
              <Col >
              <Form.Control type="text" placeholder="Normal text" />
                </Col>
             
            </Row>
              </div>
          
              <br/>
             
            </Card>
          
          </>
          
          )
          })}
    </div>
    <br/>
    <div className="d-flex justify-content-center" >
    {objects3.map((data)=>{
      return(
      <>
      <Card style={{ width: 550 }} bodyStyle={{ padding: 0 }}>
          <div className="custom-card" style={{padding:20 }}>
          <Row xs="auto">
          <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
          <Col><h4>{data.title}</h4></Col>
         
        </Row>
        <h5>12 jun</h5>
          
          
            <p>{data.quotes}</p>
      
          </div>
          <div className="custom-image">
            <img alt="example" width="100%" src={data.logo} />
          </div>
          <br/>
          <div className="alignlft" style={{padding:20 }}>
          <Row xs="auto">
          <Col><HeartOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
          <Col><CommentOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
          
        </Row>
         
        <br/>
        <Row xs="auto">
          <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
          
          <Col >
          <Form.Control type="text" placeholder="Normal text" />
            </Col>
         
        </Row>
          </div>
      
          <br/>
         
        </Card>
      
      </>
      
      )
      })}
    </div>
    <br/>
    <div className="d-flex justify-content-center" >
    {object4.map((data)=>{
      return(
      <>
      <Card style={{ width: 550  }} bodyStyle={{ padding: 0 }}>
          <div className="custom-card" style={{padding:20 }}>
          <Row xs="auto">
          <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
          <Col><h4>{data.title}</h4></Col>
         
        </Row>
        <h5>12 jun</h5>
          
          
            <p>{data.quotes}</p>
      
          </div>
          <div className="custom-image">
            <img alt="example" width="100%" src={data.logo} />
          </div>
          <br/>
          <div className="alignlft" style={{padding:20 }}>
          <Row xs="auto">
          <Col><HeartOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
          <Col><CommentOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
          
        </Row>
         
        <br/>
        <Row xs="auto">
          <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
          
          <Col >
          <Form.Control type="text" placeholder="Normal text" />
            </Col>
         
        </Row>
          </div>
      
          
          <br/>
        </Card>
      
      </>
      
      )
      })}
    </div>
    <br/>
    <div className="d-flex justify-content-center" >
    {object5.map((data)=>{
      return(
      <>
      <Card style={{ width: 550}} bodyStyle={{ padding: 0 }}>
          <div className="custom-card" style={{padding:20 }}>
          <Row xs="auto">
          <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
          <Col><h4>{data.title}</h4></Col>
         
        </Row>
        <h5>12 jun</h5>
          
          
            <p>{data.quotes}</p>
      
          </div>
          <div className="custom-image">
            <img alt="example" width="100%" src={data.logo} />
          </div>
          <br/>
          <div className="alignlft" style={{padding:20 }}>
          <Row xs="auto">
          <Col><HeartOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
          <Col><CommentOutlined style={{ fontSize: '20px', color: '#08c' }}  />10</Col>
          
        </Row>
         
        <br/>
        <Row xs="auto">
          <Col><Avatar size={30} icon={<UserOutlined />} /></Col>
          
          <Col >
          <Form.Control type="text" placeholder="Normal text" />
            </Col>
         
        </Row>
          </div>
      
          <br/>
         
        </Card>
      
      </>
      
      )
      })}
    </div>
        </Col>
        
      </Row>
      </Container>
    
    </div>
    
       
    
        
      )
      }

export default Home
