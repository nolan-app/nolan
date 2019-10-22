import React from "react";
import { Container, Title } from "./styles";

interface HomeProps {
    width: number;
}

function Home(props: HomeProps) {
    return (
        <>
            <Container width={props.width}>
                <Title>New Releases</Title>
            </Container>
        </>
    );
}

export default Home;
