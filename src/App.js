import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cartOpened, setCartOpened] = useState(false);

    useEffect(() => {
        axios
            .get("https://614a2aed07549f001755a831.mockapi.io/items")
            .then((res) => {
                setItems(res.data);
            });
        axios
            .get("https://614a2aed07549f001755a831.mockapi.io/cart")
            .then((res) => {
                setCartItems(res.data);
            });
    }, []);

    const onAddToCart = (obj) => {
        axios.post("https://614a2aed07549f001755a831.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
    };

    const onRemoveItem = (id) => {
        axios.delete(`https://614a2aed07549f001755a831.mockapi.io/cart/${id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddToFavorite = (obj) => {
        axios.post(
            "https://614a2aed07549f001755a831.mockapi.io/favorites",
            obj
        );
        setFavorites((prev) => [...prev, obj]);
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    items={cartItems}
                    onClose={() => {
                        setCartOpened(false);
                    }}
                    onRemove={onRemoveItem}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>
                        {searchValue ? `Search: "${searchValue}"` : "All Items"}
                    </h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        {searchValue && (
                            <img
                                onClick={() => setSearchValue("")}
                                className="clear cu-p"
                                src="/img/btn-remove.svg"
                                alt="Clear"
                            />
                        )}
                        <input
                            onChange={onChangeSearchInput}
                            value={searchValue}
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items
                        .filter((item) =>
                            item.title
                                .toLowerCase()
                                .includes(searchValue.toLowerCase())
                        )
                        .map((item) => (
                            <Card
                                key={item.title}
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                onFavorite={(obj) => onAddToFavorite(obj)}
                                onPlus={(obj) => onAddToCart(obj)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
