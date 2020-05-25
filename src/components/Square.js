import React from "react";

const Square = ({ colour }) => (
    <div style={{ width: 200, height: 200, backgroundColor: colour}}>
    </div>
);

Square.defaultProps = {
    colour: "rgb(0,128,128)"
};

export default Square;