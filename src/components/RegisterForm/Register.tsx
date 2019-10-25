import React, { useState, FormEvent } from 'react';
import { ModalFormProps } from '../LoginForm/Login';

import { Container } from './styles';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
import { buttonStyle, inputStyle } from '../LoginForm/styles';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';



function RForm(props: ModalFormProps) {
  const { getFieldDecorator, isFieldsTouched, resetFields, validateFieldsAndScroll } = props.form;
  const { visible } = props;
  const [accepted, setAccepted] = useState(false);
  const fields = ['email', 'username', 'password', 'confirmpwd'];

  const handleCheck = (e: CheckboxChangeEvent) => {
    e.preventDefault();
    setAccepted(e.target.checked);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateFieldsAndScroll(fields, (errs, vals) => {
      if (!errs && accepted) {
        console.log("Hurrayyyyyy, no errors!");
      }
    });
    
  }

  if (isFieldsTouched(fields) && !visible) {
    resetFields(fields);
  }

  return (
    <Container>
      <Form className={"reg-form"} onSubmit={(e) => handleSubmit(e)}>  
        <Form.Item style={{marginBottom: "15px"}} hasFeedback>
          {
            getFieldDecorator('email', { 
              rules: [
                { required: true, message: "Please input your email!" },  //TODO custom email validation (already registered).
                { type: 'email', message: "Not a valid email!" },
              ]
            })(
              <Input
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={"Email"}
                style={inputStyle}
              />
            )
          }
        </Form.Item>
        <Form.Item style={{marginBottom: "15px"}} hasFeedback>
          {
            getFieldDecorator('username', { 
              rules: [
                { required: true, message: "Please choose an username!" },  //TODO custom username validation (already choosen).
                { min: 4, max: 20, message: "Your username must have from 4 to 20 characters!" },
              ]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder={"Username"}
                style={inputStyle}
              />
            )
          }
        </Form.Item>
        <Form.Item style={{marginBottom: "15px"}} hasFeedback>
          {
            getFieldDecorator('password', {
                rules: [{ required: true, min: 5, max: 20, message: 'Invalid password!' }],  //#TODO customized validator
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder={"Password"}
                  style={inputStyle}
                />
              )
          }
        </Form.Item>
        <Form.Item style={{marginBottom: "0px"}} hasFeedback>
          {
            getFieldDecorator('confirmpwd', {
                rules: [
                  { required: true, message: 'Please input your password!' },
                  { min: 5, max: 20, message: 'Your password must have from 5 to 20 characters!' }
                ],  //#TODO customized validator
              })(
                <Input.Password
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder={"Confirm password"}
                  style={inputStyle}
                />
              )
          }
        </Form.Item>
        <Form.Item style={{marginBottom: "19px"}}>
            <Checkbox checked={accepted} onChange={(e) => handleCheck(e)}>I accept the <a className={"reg-form-link"} href='/'>Terms of Use</a></Checkbox>
            <Button htmlType="submit" type={"primary"} style={buttonStyle} block={true} >Sign up</Button>
            <p style={{textAlign: "center"}}>Already have an account? <a className="reg-form-link" href="/">Sign in now!</a></p>
        </Form.Item>
      </Form>
    </Container>
  );
}

const RegisterForm = Form.create<ModalFormProps>()(RForm);
export default RegisterForm;