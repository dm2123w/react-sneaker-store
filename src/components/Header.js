function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="./img/logo.png" alt="logo" />
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
    );
}

export default Header;
