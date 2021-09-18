function Card() {
    return (
        <div className="card">
            <div className="favorite">
                <img src="/img/unliked.svg" alt="Unliked" />
            </div>
            <img
                width={167}
                height={165}
                src="/img/sneakers/adidas-x-human-made-consortium-forum-low.jpg"
                alt=""
                className="sneaker-img"
            />
            <h5>adidas x Human Made Consortium Forum Low</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Price:</span>
                    <b>$240</b>
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
