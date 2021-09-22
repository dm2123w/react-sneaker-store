import { useState } from "react";
import styles from "./Card.module.scss";

function Card({ imageUrl, title, price, onFavorite, onPlus }) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onPlus({ imageUrl, title, price });
        setIsAdded(!isAdded);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    src="/img/unliked.svg"
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
                    src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                    alt="Plus"
                    onClick={onClickPlus}
                />
            </div>
        </div>
    );
}

export default Card;
