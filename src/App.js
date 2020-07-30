import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";

class App extends React.Component {
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
        this.setState({ products: items });
    };
    getCartCount = () => {
        const { products } = this.state;
        let count = 0;

        products.forEach((product) => {
            count += product.qty;
        });

        return count;
    };
    render() {
        return (
            <div className="App">
                <Navbar count={this.getCartCount()} />
                <Cart
                    products={this.state.products}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteItem={this.handleDeleteItem}
                />
            </div>
        );
    }
}

export default App;
