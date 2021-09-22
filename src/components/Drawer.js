function Drawer({ onClose, items = [] }) {
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

                <div className="items">
                    {items.map((obj) => (
                        <div className="cartItem d-flex align-center mb-20">
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
                    <button className="greenButton">
                        Make an order <img src="/img/arrow.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
