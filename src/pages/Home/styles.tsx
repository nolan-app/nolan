import styled from "styled-components";
import { Colors } from "./../../styles";

interface ContainerProps {
  width: number;
}

export const Container = styled.div<ContainerProps>`
  padding: ${props => (props.width < 822 ? "20px" : "40px")};
  text-align: left;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  color: ${Colors.black};
`;
