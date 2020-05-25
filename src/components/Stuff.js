import React from "react";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = ({ square }) => (
    <>
        <Header />
        <Paragraph />
        {
            square ? <Square /> : null
        }
        <People />
    </>
);

Stuff.defaultProps = {
    square: true
};

export default Stuff;