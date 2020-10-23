import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";


interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

const theme = {
    colors: {
        powderWhite: "#FFFDF9",
        persianGreen: "#06B49A",
        lightBlue: "#AFDBD2",
        onyx: "#36313D",
        danger: "#fd0b0b"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }: IProps) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;