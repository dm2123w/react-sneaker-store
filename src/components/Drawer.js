import { useState } from "react";
import axios from "axios";
import Info from "./Info";
import { useCart } from "./hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [] }) {
    const { cartItems, setCartItems, totalPrice } = useCart();
    const [orderId, setOrderId] = useState(null);
    const [isOrderCompleted, setIsOrderCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(
                "https://614a2aed07549f001755a831.mockapi.io/orders",
                { items: cartItems }
            );
            setOrderId(data.id);
            setIsOrderCompleted(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(
                    "https://614a2aed07549f001755a831.mockapi.io/cart/" +
                        item.id
                );
                await delay(1000);
            }
        } catch (error) {
            alert("Failed to create order");
            console.error(error);
        }
        setIsLoading(false);
    };

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Cart
                    <img
                        onClick={onClose}
                        className="removeBtn cu-p"
                        src="/img/btn-remove.svg"
                        alt="Close"
                    />
                </h2>

                {items.length > 0 ? (
                    <div className="d-flex flex-column flex">
                        <div className="items flex">
                            {items.map((obj) => (
                                <div
                                    key={obj.id}
                                    className="cartItem d-flex align-center mb-20"
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${obj.imageUrl})`,
                                        }}
                                        className="cartItemImg"
                                    ></div>
                                    <div className="mr-20 flex">
                                        <p>{obj.title}</p>
                                        <b>${obj.price}</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(obj.id)}
                                        className="removeBtn"
                                        src="/img/btn-remove.svg"
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li className="d-flex">
                                    <span>Total</span>
                                    <div></div>
                                    <b>${totalPrice}</b>
                                </li>
                                <li className="d-flex">
                                    <span>Tax 5%</span>
                                    <div></div>
                                    <b>${totalPrice * 0.05}</b>
                                </li>
                            </ul>
                            <button
                                onClick={onClickOrder}
                                className="greenButton"
                            >
                                Make an order{" "}
                                <img src="/img/arrow.svg" alt="Arrow" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <Info
                        title={
                            isOrderCompleted
                                ? "Order is processed"
                                : "Cart is empty"
                        }
                        description={
                            isOrderCompleted
                                ? `Tracking number of your order is ${orderId}. Expect delivery!`
                                : "To place an order, add at least one item to your cart."
                        }
                        image={
                            isOrderCompleted
                                ? "/img/complete-order.jpg"
                                : "/img/empty-cart.jpg"
                        }
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;
