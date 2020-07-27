import React from "react";
import CartItem from "./CartItem";

//class based component
class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [
                {
                    price: 500,
                    title: "Phone",
                    qty: 3,
                    img: "",
                    id: 1,
                },
                {
                    price: 99,
                    title: "Watch",
                    qty: 2,
                    img: "",
                    id: 2,
                },
                {
                    price: 1099,
                    title: "Television",
                    qty: 1,
                    img: "",
                    id: 3,
                },
            ],
        };
    }
    render() {
        const { products } = this.state;
        return (
            <div className="cart">
                {products.map((product) => <CartItem
                    product={product}
                    key={product.id} />)}
            </div>
        );
    }
}

export default Cart;
