import React from "react";
import CartItem from "./CartItem";

//class based component
const Cart = (props) => {
    const { products } = props;
    return (
        <div className="cart">
            {products.map((product) => (
                <CartItem
                    product={product}
                    key={product.id}
                    onIncreaseQuantity={props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteItem={props.onDeleteItem}
                />
            ))}
        </div>
    );
};

export default Cart;
