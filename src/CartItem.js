import React from "react";

//class based component
class CartItem extends React.Component {
    render() {
        const { price, title, qty, img } = this.props.product;

        console.log('this.props', this.props);
        
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: "#777" }}>{price}</div>
                    <div style={{ color: "#777" }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={()=>this.props.onIncreaseQuantity(this.props.product)}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992683.svg"
                            onClick = {()=>this.props.onDecreaseQuantity(this.props.product)}
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/3096/3096673.svg"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
// for inline styles
const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: "#ccc",
    },
};
export default CartItem;
