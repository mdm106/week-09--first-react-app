import React from "react";

import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = ({ square }) => (
    <>
        <Header>
            Hey Hey
        </Header>
        <Paragraph>
            Hello Hello Hello
        </Paragraph>
        {square ? <Square /> : null}
        <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
    </>
);

Stuff.defaultProps = {
    square: true
};

export default Stuff;