import React from 'react';
import Form from './Components/Form/Form';
import HomePage from './Components/HomePage/HomePage';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Navigation from './Components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Route exact path = '/' component = {HomePage} />
      <Route exact path = '/form' component = {Form} />
      <Route exact path = '/sign-up' component = {SignUp} />
      <Route path = '/sign-in' component = {SignIn} />
    </div>
  );
}

export default App;
