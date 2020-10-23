import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";


interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

const theme = {
    colors: {
        primary: "#AFDBD2",
        secondary: "#06B49A",
        danger: "#fd0b0b",

        black: "#36313D",
        white: "#FFFDF9",
        
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