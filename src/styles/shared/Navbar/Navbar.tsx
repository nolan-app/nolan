import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Row, Col } from "antd";
import SearchBar from "./SearchBar";

const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
`;

const NavbarStyle = createGlobalStyle`
    .navbar {
        height: 50px;
        padding: 20px;
        padding-top: 10px;
    }
    .search-col {
        height: 100%; 
    }
`;

function Navbar() {
    return (
        <>
            <Row className="navbar">
                <Col xs={7} sm={6} md={6} lg={6} xl={6}>
                    <Title>Nolan</Title>
                </Col>
                <Col
                    className="search-col"
                    xs={17}
                    sm={18}
                    md={18}
                    lg={18}
                    xl={18}
                >
                    <SearchBar />
                </Col>
            </Row>
            <NavbarStyle />
        </>
    );
}
export { Navbar };
