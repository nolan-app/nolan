import React from "react";
import { createGlobalStyle } from "styled-components";
import SearchBar from "./SearchBar";
import { Dropdown, Menu, Row, Col } from "antd";
import { Title, AccountButton, AccountButtonLinks } from "./styles";

const NavbarStyle = createGlobalStyle`
    .navbar {
        height: 90px;
    }
    .right-button{
        line-height: 90px;
        text-align: right;
        padding-right: 20px;
    }
`;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <AccountButtonLinks>Login</AccountButtonLinks>
    </Menu.Item>
    <Menu.Item key="1">
      <AccountButtonLinks>Create New Account</AccountButtonLinks>
    </Menu.Item>
  </Menu>
);

function NavbarMobile() {
  return (
    <>
      <NavbarStyle />
      <Row className="navbar">
        <Col xs={20} sm={20} md={20} lg={6} xl={6}>
          <Title>Nolan</Title>
        </Col>
        <Col className="right-button" xs={4} sm={4} md={4} lg={6} xl={6}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <AccountButton type="user" />
          </Dropdown>
        </Col>
      </Row>
      <SearchBar />
    </>
  );
}
export { NavbarMobile };
