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
    handleIncreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products,
        });
    };
    handleDecreaseQuantity = (product) => {
        const { products } = this.state;
        const index = products.indexOf(product);
        if (products[index].qty <= 1) return;
        products[index].qty -= 1;
        this.setState({
            products,
        });
    };

    handleDeleteItem = (id) => {
        const { products } = this.state;
        const items = products.filter((item) => item.id !== id);
        this.setState({ products:items });
    };

    render() {
        const { products } = this.state;
        console.log(this.state);
        return (
            <div className="cart">
                {products.map((product) => (
                    <CartItem
                        product={product}
                        key={product.id}
                        onIncreaseQuantity={this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteItem={this.handleDeleteItem}
                    />
                ))}
            </div>
        );
    }
}

export default Cart;
