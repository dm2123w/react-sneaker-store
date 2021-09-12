function App() {
    return (
        <div className="wrapper">
            <header>
                <div className="headerLeft">
                    <img
                        width={40}
                        height={40}
                        src="./icons/logo.png"
                        alt="logo"
                    />
                    <div className="headerInfo">
                        <h3>Sneaker Shop</h3>
                        <p>Discover the best sneakers</p>
                    </div>
                </div>
                <ul className="headerRight">
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="./icons/cart.svg"
                            alt="logo"
                        />
                        <span>$135.00</span>
                    </li>
                    <li>
                        <img
                            width={18}
                            height={18}
                            src="./icons/user.svg"
                            alt="logo"
                        />
                    </li>
                </ul>
            </header>
            <div className="content">
                <h1>All Items</h1>
                ...
            </div>
        </div>
    );
}

export default App;
