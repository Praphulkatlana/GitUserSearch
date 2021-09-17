import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  
} from "reactstrap";
import { UserContext } from '../Context/UserContext';
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {

  const context = useContext(UserContext)
  const [isopen, setisopen] = useState(false)
  const toggle = () => setisopen(!isopen)
  return (
      <Navbar color="info" light expand="md">
      <NavbarBrand className="px-3">
        <Link to="/" style={{paddingLeft: 13, textDecoration: 'none'}} className="text-white">Home</Link>
        </NavbarBrand>
        {context.User?.uid ? context.User.email.substr(0,
          context.User.email.indexOf("@")) : ""}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isopen} navbar>
          <Nav className="ml-full px-5" navbar>
          {context.User?(
            <NavItem>
              <NavLink onClick={()=>context.setUser(null)}>
              Logout
              </NavLink>
            </NavItem>
          ):
        <>
        <NavItem className="px-5">
              <NavLink tag={Link} to="/signup">
              Signup
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/signin">
              SignIn
              </NavLink>
            </NavItem>
        </>
        }
          
          </Nav>
        </Collapse>

      </Navbar>

  )
}

export default Header



