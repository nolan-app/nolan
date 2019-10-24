import React from 'react';

import { Form, Input, Icon, Checkbox, Button } from "antd";
import { FormComponentProps } from 'antd/es/form';

import { Container, inputStyle, buttonStyle } from './styles';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

interface LoginFormProps extends FormComponentProps {
  visible: boolean,
}

function handleCheck(e: CheckboxChangeEvent) {
  e.preventDefault();
  if (e.target.checked) {
    console.log("Remember me");
  } else {
    console.log("Do NOT Remember me");
  }
};

function lForm(props : LoginFormProps) {
  const { getFieldDecorator, isFieldsTouched, resetFields } = props.form
  const { visible } = props;

  if (isFieldsTouched(['username', 'password']) && !visible) {
    resetFields(['username', 'password']);
  }

  return (
    <Container>
      <Form className={"login-form"}>  
        <Form.Item style={{marginBottom: "15px"}}>
          {
            getFieldDecorator('username', { 
              rules: [{ required: true, min: 4, max: 20, message: "Invalid username!" }]  //#TODO customized validator
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                style={inputStyle}
              />
            )
          }
        </Form.Item>
        <Form.Item style={{marginBottom: "0px"}}>
          {
            getFieldDecorator('password', {
                rules: [{ required: true, min: 5, max: 20, message: 'Invalid password!' }],  //#TODO customized validator
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  style={inputStyle}
                />
              )
          }
        </Form.Item>
        <Form.Item style={{marginBottom: "19px"}}>
            <Checkbox onChange={(e) => handleCheck(e)}>Remember me</Checkbox>
            <a className="login-form-forgot" href="/">
             Forgot password
            </a>
            <Button type={"primary"} style={buttonStyle} block={true} >Sign in</Button>
            <p style={{textAlign: "center"}}>Don't have an account? <a className="login-form-create" href="/">Create one now!</a></p>
        </Form.Item>
      </Form>
    </Container>
  );
}

const LoginForm = Form.create<LoginFormProps>({})(lForm);
export default LoginForm;
