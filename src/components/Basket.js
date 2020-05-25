import React from "react";

import BasketItem from "./BasketItem";

const Basket = ({ items }) => (
    <>
    { items ? 
    <table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th> 
        </tr>  
    </thead> 
            {items.map((item, index) => (
                <tr key={ index }>
                    <BasketItem item={item}/>
                </tr>
            ))}
    </table>
    : <p>Nothing on the list</p>
    }
    </>
);


export default Basket;