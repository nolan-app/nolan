import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Row, Col } from "antd";
import SearchBar from "./SearchBar";
import { Title } from "./styles";
import { Colors } from "./../../styles";

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

interface AccountLinkProps {
    primary?: boolean;
}

const AccountLink = styled.a<AccountLinkProps>`
    &:hover,
    &:active {
        color: ${props =>
            props.primary ? Colors.primary : Colors.secondary} !important;
    }

    font-size: 20px;
    display: inline-block;
    line-height: 90px;
    margin-left: 10px;
    color: ${props => (props.primary ? Colors.black : Colors.gray)};
    font-weight: ${props => (props.primary ? "bold" : null)};
`;

const AccountLinks = styled.div`
    text-align: center;
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
                    <AccountLinks>
                        <AccountLink primary>Login</AccountLink>
                        <AccountLink>Create New Account</AccountLink>
                    </AccountLinks>
                </Col>
            </Row>
        </>
    );
}
export { NavbarDesktop };
