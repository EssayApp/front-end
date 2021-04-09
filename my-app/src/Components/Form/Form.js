import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


// import { render } from "react-dom";

import "./Form.css";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 350
    },
    TextareaAutosize: {
        width: 1200,
        height: 600
    }
    
}));

const Form = () => {
    
    const classes = useStyles();

    return (
        <div class="ui_form">
            {/* <div class="three_fields"> */}
            <form
                style={{ display: "flex", flexDirection: "column" }}
                className={classes.container}
                noValidate
            >
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="fName"
                    label="Full Name"
                    name="fName"
                    autoComplete="fName"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    // fullWidth
                    id="cName"
                    label="Class Name"
                    name="cname"
                    autoComplete="cName"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="pName"
                    label="Professor Name"
                    name="pName"
                    autoComplete="pName"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    id="date"
                    label="Date"
                    type="date"
                    // defaultValue="2017-05-24"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true
                    }}
                />
            </form>
            <br></br>
            <TextareaAutosize
                placeholder="Insert Essay Text Here..."
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="text"
                label="Insert Essay Text Here..."
                name="text"
                autoComplete="text"
                autoFocus
                className={classes.TextareaAutosize}
            />
            <br></br>
            <Button
                type="submit"
                // fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Format
            </Button>
            {/* </div> */}
        </div>
    );
};

export default Form;

