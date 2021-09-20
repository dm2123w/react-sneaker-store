import { useState } from "react";
import styles from "./Card.module.scss";

function Card(props) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(true);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img
                    src="/img/unliked.svg"
                    alt="Unliked"
                    onClick={props.onFavorite}
                />
            </div>
            <img
                width={167}
                height={165}
                src={props.imageUrl}
                alt=""
                className="sneaker-img"
            />
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{props.price}</b>
                </div>
                <img
                    className={styles.plus}
                    src={isAdded ? "/img/liked.svg" : "/img/btn-plus.svg"}
                    alt="Plus"
                    onClick={onClickPlus}
                />
            </div>
        </div>
    );
}

export default Card;
