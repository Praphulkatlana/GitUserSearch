import './App.css';
import React,{useState} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Signin from './pages/Signin';
import Header from './Layout/Header';
import { UserContext } from './Context/UserContext';
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Layout/Footer';
import firebase from 'firebase/compat/app';
import "firebase/auth"
import firebaseConfig from './Config/firebaseConfig';

firebase.initializeApp(firebaseConfig);

const App = ()=> {

  const [User, setUser] = useState(null)
  return (
    <Router>
    <UserContext.Provider value={{User,setUser}}>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/signin" component={Signin}></Route>
      <Route exact path="/signup" component={Signup}></Route>
      <Route exact path="*" component={NotFound}></Route>
    </Switch>
    </UserContext.Provider>
    <Footer/>
    </Router>
  );
}

export default App;
