import Card from "../components/Card";

function Orders() {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>My Orders</h1>
            </div>
            <div className="d-flex flex-wrap">
                {[].map((item) => (
                    <Card />
                ))}
            </div>
        </div>
    );
}

export default Orders;
