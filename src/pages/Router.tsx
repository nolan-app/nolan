import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import { Navbar } from "./../styles/shared/index";
import GlobalStyle from "./../styles/global";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Home />
                <GlobalStyle />
            </BrowserRouter>
        </>
    );
}

export default Router;
