//import the React library
import React from "react";

const Paragraph = ({ children }) => (
    <>
        <p>{!children ? "Hello, World" : children}</p>
    </>
);

export default Paragraph;