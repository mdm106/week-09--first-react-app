import React from "react";


const FadeIn = ({ time, children }) => (
    <div style={{ animation: `fadeIn ease ${time}`}}>
        {children}
    </div>
)








export default FadeIn;