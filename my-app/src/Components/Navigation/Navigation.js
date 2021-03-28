import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import HomeIcon from "@material-ui/icons/Home";
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";

import "./Navigation.css";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
        // maxWidth: 3000
    }
});

function Navigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="primary"
                aria-label="icon label tabs example"
                centered
            >
                <div className="Nav">
                    <Link
                        to="/"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Tab icon={<HomeIcon />} label="HOME" />
                    </Link>
                    <Link
                        to="/form"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Tab icon={<LibraryBooksIcon />} label="FORM" />
                    </Link>
                    <Link
                        to="/sign-in"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Tab icon={<PersonPinIcon />} label="MEMBERS" />
                    </Link>
                </div>
            </Tabs>
        </Paper>
    );
}

export default Navigation;
