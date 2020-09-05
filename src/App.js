import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Login from './components/Login'
import Welcome from './components/Welcome'
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
     <Router>
       <Switch>
         <Route exact path={'/'} component={Signup}/>
         <Route exact path={'/login'} component={Login}/>
         <Route exact path={'/welcome'} component={Welcome}/>

       </Switch>
     </Router>
    )
  }
}

export default App;
