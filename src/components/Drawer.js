import { useContext, useState } from "react";
import AppContext from "../context";
import Info from "./Info";

function Drawer({ onClose, onRemove, items = [] }) {
    const { setCartItems } = useContext(AppContext);
    const [isOrderCompleted, setIsOrderCompleted] = useState(false);

    const onClickOrder = () => {
        setIsOrderCompleted(true);
        setCartItems([]);
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
                        <div className="items">
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
                                    <b>$480</b>
                                </li>
                                <li className="d-flex">
                                    <span>Tax 5%</span>
                                    <div></div>
                                    <b>$24</b>
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
                                ? "Expect delivery!"
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
