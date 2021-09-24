import { useState, useContext } from "react";
import ContentLoader from "react-content-loader";
import styles from "./Card.module.scss";
import AppContext from "../../context";

function Card({
    id,
    imageUrl,
    title,
    price,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false,
}) {
    const { isItemAdded } = useContext(AppContext);
    const [isFavorite, setIsFavorite] = useState(favorited);
    const obj = { id, parentId: id, title, imageUrl, price };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 160 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect
                        x="1"
                        y="0"
                        rx="10"
                        ry="10"
                        width="160"
                        height="155"
                    />
                    <rect x="0" y="167" rx="5" ry="5" width="160" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect
                        x="124"
                        y="230"
                        rx="10"
                        ry="10"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    {" "}
                    <div className={styles.favorite} onClick={onClickFavorite}>
                        <img
                            src={
                                isFavorite
                                    ? "/img/liked.svg"
                                    : "/img/unliked.svg"
                            }
                            alt="Unliked"
                            onClick={onFavorite}
                        />
                    </div>
                    <img
                        width={167}
                        height={165}
                        src={imageUrl}
                        alt=""
                        className="sneaker-img"
                    />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Price:</span>
                            <b>${price}</b>
                        </div>
                        <img
                            className={styles.plus}
                            src={
                                isItemAdded(id)
                                    ? "/img/btn-checked.svg"
                                    : "/img/btn-plus.svg"
                            }
                            alt="Plus"
                            onClick={onClickPlus}
                        />
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;
