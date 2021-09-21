function Drawer() {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Cart
                    <img
                        className="removeBtn cu-p"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="/img/sneakers/adidas-x-human-made-consortium-forum-low.jpg"
                            alt="Sneakers"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                adidas x Human Made Consortium Forum Low
                            </p>
                            <b>$240</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="/img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>
                    <div className="cartItem d-flex align-center">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="/img/sneakers/adidas-x-human-made-consortium-forum-low.jpg"
                            alt="Sneakers"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                adidas x Human Made Consortium Forum Low
                            </p>
                            <b>$240</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="/img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>
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
