import React from "react";

const BasketItem = ({ item }) => (
    <>
        <td>
            { item.name }
        </td>
        <td>
            { item.price }
        </td>
    </>
);


export default BasketItem;