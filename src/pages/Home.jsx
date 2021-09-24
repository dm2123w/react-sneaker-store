import Card from "../components/Card";

function Home({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchInput,
    onAddToCart,
    onAddToFavorite,
}) {
    return (
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
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            onPlus={(obj) => onAddToCart(obj)}
                            {...item}
                            added={cartItems.some(
                                (obj) => Number(obj.id) === Number(item.id)
                            )}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Home;
