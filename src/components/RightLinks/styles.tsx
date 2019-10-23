import styled from 'styled-components';
import {Colors} from '../../styles/Colors'

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  
  #title {
    margin-top: 67px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    color: #000000;
  }

  

`

interface AccountLinkProps {
  primary?: boolean;
}

export const AccountLink = styled.a<AccountLinkProps>`
  &:hover, &:active {
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

export const AccountLinks = styled.div`
  text-align: center;
`;