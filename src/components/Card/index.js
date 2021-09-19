import styles from "./Card.module.scss";

console.log(styles);

function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/unliked.svg" alt="Unliked" />
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
                <button className="button">
                    <img
                        width={11}
                        height={11}
                        src="/img/plus.svg"
                        alt="Plus"
                    />
                </button>
            </div>
        </div>
    );
}

export default Card;
