import React, { useState, useContext, useEffect } from 'react'
import Axios from 'axios';
// import UserForm from '../Component/Form'
// import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Input } from 'reactstrap';
import UserCard from '../Component/UserCard';
import Repos from '../Component/repos';
import { UserContext } from '../Context/UserContext';
import LoginCart from '../Component/LoginCart';


const Home = () => {
    const [username, setusername] = useState('')
    const [isLogin, setisLogin] = useState(false)
    const [user, setuser] = useState(null)
    const context = useContext(UserContext)

    const fecthData = async () => {
        if(username===""){
            return alert("Enter name")
        }
        try {
            
            const res = await Axios.get(`https://api.github.com/users/${username}`)
            if(res.status===200){
                setuser(res.data)
            }
            else{
                setuser(null) 
            }

        } catch (error) {
            setuser(null) 
        }
        
        
    }
    useEffect(() => {
        { context.User ? setisLogin(true) : setisLogin(false) }
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        fecthData()
    }


    return (

        <div className="mt-5">
        
            <form id="inputForm" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setusername(e.target.value)}
                    className="inputtext"
                    placeholder="Enter User Name"
                />

                <Button disabled={!isLogin}  type="submit">Search</Button>
                {isLogin ? null : <LoginCart/>}
            </form>
         { isLogin &&
            <div>
            {user ? <UserCard user={user} /> : null}
            {user ? <Repos repos_url={user.repos_url} /> : null}
            </div>
         }
        </div>

    )
}

export default Home
