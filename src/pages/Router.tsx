import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import GlobalStyle from "../styles/global"

function Router() {
    return (
        <>
            <BrowserRouter>
                <Home />
            </BrowserRouter>

            <GlobalStyle />
        </>
    );
}

export default Router;
