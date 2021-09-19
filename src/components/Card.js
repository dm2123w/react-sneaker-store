function Card({ obj }) {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img
                width={167}
                height={165}
                src={obj.imageUrl}
                alt=""
                className="sneaker-img"
            />
            <h5>{obj.name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>{obj.price}</b>
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
