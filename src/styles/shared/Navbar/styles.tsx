import styled from "styled-components";
import { Colors } from "./..";
import { Icon } from "antd";

export const Title = styled.h1`
    font-size: 40px;
    font-weight: bold;
    line-height: 90px;
    padding-left: 20px;
    color: ${Colors.primary};
`;

export const AccountButton = styled(Icon)`
    font-size: 25px;
    color: ${Colors.black};
`;

export const AccountButtonLinks = styled.a`
    font-size: 18px;
    color: ${Colors.black};
`;
