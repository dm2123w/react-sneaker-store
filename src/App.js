import { useState } from "react";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

function App() {
    const [items, setItems] = useState();

    const [cartOpened, setCartOpened] = useState(false);

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    onClose={() => {
                        setCartOpened(false);
                    }}
                />
            )}
            <Header onClickCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All Items</h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        <input placeholder="Search..." />
                    </div>
                </div>
                <div className="d-flex flex-wrap">
                    {items.map((obj) => (
                        <Card
                            title={obj.title}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                            onFavorite={() => console.log("Added to favorites")}
                            onPlus={() => console.log("Added to cart")}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
