import React, { CSSProperties, useState } from 'react';
import { Modal } from 'antd';
import LoginForm from '../LoginForm/Login';

import { AccountLinks, AccountLink, Title } from './styles';
import RegisterForm from '../RegisterForm/Register';

const loginModalStyle: CSSProperties = {
  height: "450px",
}

const regModalStyle: CSSProperties = {
  height: "610px",
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
        bodyStyle={loginModalStyle}
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
        bodyStyle={regModalStyle}
        closable={false}
        width={400}
      >
        <Title>Register</Title>
        <RegisterForm visible={register} />
      </Modal>

    </>
  );
}