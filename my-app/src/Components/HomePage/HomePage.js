import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import "./HomePage.css";

const HomePage = () => {
    return (
        // <h1>Home Page</h1>
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography
                    component="div"
                    style={{ backgroundColor: "#cfe8fc", height: "90vh" }}
                />
            </Container>
        </React.Fragment>
    );
};

export default HomePage;
