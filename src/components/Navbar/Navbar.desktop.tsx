import React from "react";
import { createGlobalStyle } from "styled-components";
import { Row, Col } from "antd";
import SearchBar from "./SearchBar";
import { Title } from "./styles";
import RightLinks from "../RightLinks/RightLinks";

const NavbarStyle = createGlobalStyle`
    .navbar {
        padding: 20px;
        height: 90px;
        padding-top: 10px;
        margin-bottom: 40px;
    }
    .search-col {
        height: 100%; 
        line-height: 90px;
        margin-top: 35px;
    }
`;

function NavbarDesktop() {
    return (
        <>
            <NavbarStyle />
            <Row className="navbar">
                <Col sm={3} md={4} lg={4} xl={6}>
                    <Title>Nolan</Title>
                </Col>
                <Col className="search-col" sm={12} md={11} lg={12} xl={12}>
                    <SearchBar />
                </Col>
                <Col sm={9} md={8} lg={8} xl={6}>
                    <RightLinks />
                </Col>
            </Row>
        </>
    );
}
export { NavbarDesktop };
