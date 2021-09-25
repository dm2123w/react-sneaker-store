import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import AppContext from "./context";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [cartResponse, favoritesResponse, itemsResponse] =
                    await Promise.all([
                        await axios.get(
                            "https://614a2aed07549f001755a831.mockapi.io/cart"
                        ),
                        await axios.get(
                            "https://614a2aed07549f001755a831.mockapi.io/favorites"
                        ),
                        await axios.get(
                            "https://614a2aed07549f001755a831.mockapi.io/items"
                        ),
                    ]);

                setIsLoading(false);
                setCartItems(cartResponse.data);
                setFavorites(favoritesResponse.data);
                setItems(itemsResponse.data);
            } catch (error) {
                alert("Error while requesting data");
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const onAddToCart = async (obj) => {
        try {
            const findItem = cartItems.find(
                (item) => Number(item.parentId) === Number(obj.id)
            );
            if (findItem) {
                setCartItems((prev) =>
                    prev.filter(
                        (item) => Number(item.parentId) !== Number(obj.id)
                    )
                );
                await axios.delete(
                    `https://614a2aed07549f001755a831.mockapi.io/cart/${findItem.id}`
                );
            } else {
                setCartItems((prev) => [...prev, obj]);
                const { data } = await axios.post(
                    "https://614a2aed07549f001755a831.mockapi.io/cart",
                    obj
                );
                setCartItems((prev) =>
                    prev.map((item) => {
                        if (item.parentId === data.parentId) {
                            return {
                                ...item,
                                id: data.id,
                            };
                        }
                        return item;
                    })
                );
            }
        } catch (error) {
            alert("Error while adding to cart");
            console.error(error);
        }
    };

    const onRemoveItem = (id) => {
        try {
            axios.delete(
                `https://614a2aed07549f001755a831.mockapi.io/cart/${id}`
            );
            setCartItems((prev) =>
                prev.filter((item) => Number(item.id) !== Number(id))
            );
        } catch (error) {
            alert("Error while deleting from cart");
            console.error(error);
        }
    };

    const onAddToFavorite = async (obj) => {
        try {
            if (
                favorites.find((favObj) => Number(favObj.id) === Number(obj.id))
            ) {
                axios.delete(
                    `https://614a2aed07549f001755a831.mockapi.io/favorites/${obj.id}`
                );
                setFavorites((prev) =>
                    prev.filter((item) => Number(item.id) === Number(obj.id))
                );
            } else {
                const { data } = await axios.post(
                    "https://614a2aed07549f001755a831.mockapi.io/favorites",
                    obj
                );
                setFavorites((prev) => [...prev, data]);
            }
        } catch (error) {
            alert("Failed to add to favorites");
            console.error(error);
        }
    };

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value);
    };

    const isItemAdded = (id) => {
        return cartItems.some((obj) => Number(obj.parentId) === Number(id));
    };

    return (
        <AppContext.Provider
            value={{
                items,
                cartItems,
                favorites,
                isItemAdded,
                onAddToFavorite,
                onAddToCart,
                setCartOpened,
                setCartItems,
            }}
        >
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

                <Route path="/" exact>
                    <Home
                        items={items}
                        cartItems={cartItems}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeSearchInput={onChangeSearchInput}
                        onAddToCart={onAddToCart}
                        onAddToFavorite={onAddToFavorite}
                        isLoading={isLoading}
                    />
                </Route>

                <Route path="/favorites" exact>
                    <Favorites />
                </Route>

                <Route path="/orders" exact>
                    <Orders />
                </Route>
            </div>
        </AppContext.Provider>
    );
}

export default App;
