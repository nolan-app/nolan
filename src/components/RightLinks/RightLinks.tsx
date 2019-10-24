import React, { CSSProperties, useState } from 'react';
import { Modal } from 'antd';
import LoginForm from '../LoginForm/Login';

import { AccountLinks, AccountLink, Title } from './styles';

const modalStyle: CSSProperties = {
  height: "410px",
}

export default function RightLinks() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <>
      <AccountLinks>
        <AccountLink primary
            onClick={() => setLogin(true)}
        >Login</AccountLink>
        <AccountLink
          onClick={() => setRegister(true)}
        >Create New Account</AccountLink>
      </AccountLinks>
      <Modal
        visible={login}
        onCancel={() => setLogin(false)}
        footer={null}
        centered={true}
        bodyStyle={modalStyle}
        closable={false}
        width={400}
      >
        <Title>Login</Title>
        <LoginForm visible={login} />
      </Modal>

      <Modal
        visible={register}
        onCancel={() => setRegister(false)}
        footer={null}
        centered={true}
        bodyStyle={modalStyle}
        closable={false}
        width={400}
      >
        <Title>Register</Title>
        <LoginForm visible={register} />
      </Modal>

    </>
  );
}