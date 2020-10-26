import React from "react";
import Theme from "../themes/theme";
import styled from "styled-components";

const Container = styled.div`
    width: 30%;
    border: ${props => `1px solid ${props.theme.colors.black}`};
    background-color: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts[0]};
    margin:15px;
    padding:15px;
`;

const ContainerDanger = styled(Container)`
    background-color: ${props => props.theme.colors.danger};

`;



const Heading = styled.h1`
    font-size: ${({ theme: { fontSizes } }) =>
        fontSizes.small};
    color: ${({ theme: { colors } }) => colors.secondary};
`;

const HeadingDanger = styled(Heading)`
    
    color: ${({ theme: { colors } }) => colors.white};
`;

const TestTheme = () => {
    return (
        <Theme>
            <Container>
                <Heading>Hello World</Heading>
                <h2>By the power of styled-components!</h2>
            </Container>

            <ContainerDanger>
                <HeadingDanger>Hello Lorem</HeadingDanger>
                <h2>By the power of styled-components!</h2>
            </ContainerDanger>

        </Theme>
    );
};
export default TestTheme;