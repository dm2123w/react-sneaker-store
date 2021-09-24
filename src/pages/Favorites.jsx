import { useContext } from "react";
import AppContext from "../context";
import Card from "../components/Card";

function Favorites() {
    const { favorites, onAddToFavorite } = useContext(AppContext);

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Favorites</h1>
            </div>
            <div className="d-flex flex-wrap">
                {favorites.map((item) => (
                    <Card
                        key={item.title}
                        favorited={true}
                        onFavorite={onAddToFavorite}
                        {...item}
                    />
                ))}
            </div>
        </div>
    );
}

export default Favorites;
