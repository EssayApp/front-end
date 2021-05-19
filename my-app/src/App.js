import React from "react";
import Form from "./Components/Form/Form";
import TextEditor from "./Components/Editor/TextEditor";
import HomePage from "./Components/HomePage/HomePage";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Navigation from "./Components/Navigation/Navigation";
import { Route } from "react-router-dom";
import "./App.css";
import logo from './essay-icon.jpeg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <div>
                    <Navigation />
                </div>
                <Route exact path="/" component={HomePage} />
                {/* <Route exact path="/form" component={Form} /> */}
            </header>
            <div className="editor">
                <Route exact path="/edit" component={TextEditor} />
            </div>

            <Route exact path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
        </div>
    );
}

export default App;
