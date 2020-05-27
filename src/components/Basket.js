import React from "react";

import BasketItem from "./BasketItem";

const Basket = ({ items }) => (
    <>
    { items ? 
    <table className="table table-bordered">
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th> 
        </tr>  
    </thead> 
    <tbody>
            {items.map((item, index) => (
                <tr key={ index }>
                    <BasketItem item={item}/>
                </tr>
            ))}
    </tbody>
    </table>
    : <p>Nothing on the list</p>
    }
    </>
);


export default Basket;