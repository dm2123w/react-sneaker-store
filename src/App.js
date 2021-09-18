import Card from "./components/Card";
import Header from "./components/Header";

function App() {
    return (
        <div className="wrapper clear">
            <div style={{ display: "none" }} className="overlay">
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
                            Make an order{" "}
                            <img src="/img/arrow.svg" alt="Arrow" />
                        </button>
                    </div>
                </div>
            </div>
            <Header />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All Items</h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        <input placeholder="Search..." />
                    </div>
                </div>
                <div className="d-flex">
                    <Card />
                    <div className="card">
                        <img
                            width={167}
                            height={165}
                            src="/img/sneakers/asics-gel-lyte-iii.jpg"
                            alt=""
                            className="sneaker-img"
                        />
                        <h5>Asics Gel-Lyte III</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price:</span>
                                <b>$200</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="Plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            width={167}
                            height={165}
                            src="/img/sneakers/asics-gel-preleus.jpg"
                            alt=""
                            className="sneaker-img"
                        />
                        <h5>Asics Gel-preleus</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price:</span>
                                <b>$210</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="Plus"
                                />
                            </button>
                        </div>
                    </div>
                    <div className="card">
                        <img
                            width={167}
                            height={165}
                            src="/img/sneakers/nike-air-huarache.jpg"
                            alt=""
                            className="sneaker-img"
                        />
                        <h5>Nike Air Huarache</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price:</span>
                                <b>$200</b>
                            </div>
                            <button className="button">
                                <img
                                    width={11}
                                    height={11}
                                    src="/img/plus.svg"
                                    alt="Plus"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
