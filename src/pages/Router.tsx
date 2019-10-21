import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import "./main.css";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </>
    );
}

export default Router;
