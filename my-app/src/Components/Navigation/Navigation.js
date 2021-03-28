import React from "react";
import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="Nav">
                <h1>Essay App</h1>
                <div>
                    <Link to = "/">Home</Link>
                </div>
                <div>
                    <Link to = "/form">Form</Link>
                </div>
                <div>
                    <Link to = "/sign-in">Members</Link>
                </div>
                {/* <div>
                    <Link to = "/sign-up">SignUp</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Navigation;
