import React, { CSSProperties, useState } from 'react';
import { Modal } from "antd";
import { AccountLinks, AccountLink } from './styles';
import { Container } from './styles';

const modalStyle: CSSProperties = {
  height: "410px",
}

export default function RightLinks() {
  const [visible, setVisible] =  useState(false);

  return (
    <>
      <AccountLinks>
        <AccountLink primary
            onClick={() => setVisible(true)}
            >Login</AccountLink>
        <AccountLink>Create New Account</AccountLink>
      </AccountLinks>
      <Modal
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        centered={true}
        bodyStyle={modalStyle}
        closable={false}
        width={400}
      >
        <Container>
          <div id="title">Login</div>

        </Container>
      </Modal>
    </>
  );
}
