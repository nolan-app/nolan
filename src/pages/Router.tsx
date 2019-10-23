import React, { useState, useLayoutEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import { NavbarDesktop, NavbarMobile } from "./../components/Navbar";
import GlobalStyle from "../styles/Global";

function Router() {
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const [width] = useWindowSize();
  console.log({ width });

  return (
    <>
      <BrowserRouter>
        {width < 822 ? <NavbarMobile /> : <NavbarDesktop />}
        <Home width={width} />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default Router;
