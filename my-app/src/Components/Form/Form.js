import React from "react";
// import { render } from "react-dom";
import "./Form.css";

const Form = () => {
    return (
        <div class="ui_form">
            <div class="three_fields">
                <div class="field">
                    <label style={{ marginRight: "30px"}}>Full Name</label>
                    <input type="text" placeholder="Full Name"></input>
                </div>
                <div class="field">
                    <label style={{ marginRight: "30px" }}>Class Name</label>
                    <input type="text" placeholder="Class Name"></input>
                </div>
                <div class="field">
                    <label style={{ marginRight: "30px" }}>
                        Professor Name
                    </label>
                    <input type="text" placeholder="Professor Name"></input>
                </div>
                <div class="field">
                    <label style={{ marginRight: "30px" }}>Date</label>
                    <input type="text" placeholder=""></input>
                </div>
                <div class="field">
                    <label style={{ marginRight: "30px" }}>
                        Insert Essay text here:
                    </label>
                    <input type="text" placeholder=""></input>
                </div>
                <div>
                    <div class="field">
                        <button>Format</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
