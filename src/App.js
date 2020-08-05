import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";
import * as firebase from "firebase";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
            loading: true,
        };
    }
    componentDidMount() {
        firebase
            .firestore()
            .collection("products")
            .onSnapshot((snapshot) => {
                
                const products = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    console.log(data);
                    data["id"] = doc.id;
                    return data;
                });

                this.setState({ products: products, loading: false });
            });
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
    getCartTotal = () => {
        const { products } = this.state;
        let total = 0;
        products.forEach((product) => {
            total += product.qty * product.price;
        });
        return total;
    };
    render() {
        const { products, loading } = this.state;
        return (
            <div className="App">
                <Navbar count={this.getCartCount()} />
                <Cart
                    products={products}
                    onIncreaseQuantity={this.handleIncreaseQuantity}
                    onDecreaseQuantity={this.handleDecreaseQuantity}
                    onDeleteItem={this.handleDeleteItem}
                />
                {loading && <h1>Loading Products..</h1>}
                <div style={{ padding: 10, fontSize: 20 }}>
                    Total:{this.getCartTotal()}
                </div>
            </div>
        );
    }
}

export default App;
