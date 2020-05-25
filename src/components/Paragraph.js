//import the React library
import React from "react";

const Paragraph = ({ message }) => (
    <>
        <p>{!message ? "Hello, World" : message}</p>
    </>
);

export default Paragraph;