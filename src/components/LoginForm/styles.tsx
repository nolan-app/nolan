import styled from 'styled-components';
import { CSSProperties } from 'react';

export const Container = styled.div`
  width: 100%;
  margin: 12.5% 12.5%;
  .login-form {
    max-width: 75%;
  }
  .login-form-forgot {
    float: right;
  }

  .login-form-create {
    color: #826DFF;
    font-weight: 600;
  }
`;

export const inputStyle: CSSProperties = {
  border: "1px solid rgba(0, 0, 0, 0.2)", 
  borderRadius: "5px"
}

export const buttonStyle: CSSProperties = {
  backgroundColor: "#826DFF",
  borderRadius: "5px",
  borderColor: "#826DFF"
}