import React,{useState,useContext} from 'react'
import { Form,Button } from 'react-bootstrap';
import firebase from 'firebase/compat'
import { UserContext } from '../Context/UserContext'
import { Redirect } from "react-router-dom";
import { Input } from 'reactstrap';
import { toast } from "react-toastify";

const  Signup=()=> {
const context=useContext(UserContext)
const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const handleSignup=()=>{
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res=>{
        console.log(res)
       context.setUser({email:res.user.email, uid:res.user.uid})
    })
    .catch(error=>{
        console.log(error)
        console.log(error.message)
        toast(error, {
          type: "error"
        });
    })
}
const handleSubmit=(e)=>{
    e.preventDefault()
    handleSignup();
}
    
    if(context.User?.uid){
    return <Redirect to="/"/>
    }
    return(
    <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address </Form.Label>
    <Input
    type="email"
    name="email"
    id="email"
    placeholder="Enter Email"
    value={email}
    onChange={e=>setemail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Input
    type="password"
    name="password"
    id="password"
    placeholder="Enter password"
    value={password}
    onChange={e=>setpassword(e.target.value)}
    />  </Form.Group>
  
  <Button variant="dark"   type="submit">
    Submit
  </Button>
</Form>


    )

}

export default Signup
