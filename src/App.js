function App() {
    return (
        <div className="wrapper clear">
            <div className="overlay">
                <div className="drawer">
                    <h2>Cart</h2>
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
                        <img src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                </div>
            </div>

            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center">
                    <img
                        width={40}
                        height={40}
                        src="./img/logo.png"
                        alt="logo"
                    />
                    <div>
                        <h3>Sneaker Shop</h3>
                        <p>Discover the best sneakers</p>
                    </div>
                </div>
                <ul className="d-flex">
                    <li className="mr-30">
                        <img
                            width={18}
                            height={18}
                            src="./img/cart.svg"
                            alt="logo"
                        />
                        <span>$135.00</span>
                    </li>
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="./img/user.svg"
                            alt="logo"
                        />
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All Items</h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        <input placeholder="Search..." />
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card">
                        <div className="favorite">
                            <img src="/img/unliked.svg" alt="Unliked" />
                        </div>
                        <img
                            width={167}
                            height={165}
                            src="/img/sneakers/adidas-x-human-made-consortium-forum-low.jpg"
                            alt=""
                            className="sneaker-img"
                        />
                        <h5>adidas x Human Made Consortium Forum Low</h5>
                        <div className="d-flex justify-between align-center">
                            <div className="d-flex flex-column">
                                <span>Price:</span>
                                <b>$240</b>
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
