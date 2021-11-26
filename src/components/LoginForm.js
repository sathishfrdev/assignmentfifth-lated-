import React,{useState} from 'react'
import Form from 'react-bootstrap/Form'
import { Button ,Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function LoginForm({Login,error}) {

const [details,setDetails]=useState({name:"",email:"",password:""})

const submitHandler=e=>{
e.preventDefault()

Login(details)

}
    return (
//         <form onSubmit={submitHandler}>
//         <h2>login</h2>
// <div>
//         <label>name</label>
//         <input type="text" name="name" id="name" onChange={e=>setDetails({...details, name:e.target.value})} value={details.name}/>        
// </div>

// <div>
//         <label>mail</label>
//         <input type="email" name="email" id="email" onChange={e=>setDetails({...details, email:e.target.value})} value={details.email}/>        
// </div>
// <div>
//         <label>password</label>
//         <input type="password" name="password" id="password" onChange={e=>setDetails({...details, password:e.target.value})} value={details.password}/>        
// </div>
// <input type="submit" value="login" />
//         </form>

<Container style={{marginTop:100}}>

 
 
        <Form onSubmit={submitHandler}>
        {(error !="")?(<div style={{color:"red"}} >{error}</div>) :""}

        <Form.Group  style={{width:500}} className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="email" name="email" onChange={e=>setDetails({...details, email:e.target.value})} value={details.email}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      
        <Form.Group style={{width:500}} className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" id="password" onChange={e=>setDetails({...details, password:e.target.value})} value={details.password} />
        </Form.Group>
        
        <Button variant="primary" type="submit" value="login">
          Submit
        </Button>
      </Form>
</Container>
    
    )
}

export default LoginForm
