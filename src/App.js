import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";

const arr = [
    {
        name: "adidas x Human Made Consortium Forum Low",
        price: "$240",
        imageUrl: "/img/sneakers/adidas-x-human-made-consortium-forum-low.jpg",
    },
    {
        name: "Asics Gel-Lyte III",
        price: "$200",
        imageUrl: "/img/sneakers/asics-gel-lyte-iii.jpg",
    },
    {
        name: "Asics Gel-preleus",
        price: "$210",
        imageUrl: "/img/sneakers/asics-gel-preleus.jpg",
    },
    {
        name: "Nike Air Huarache",
        price: "$200",
        imageUrl: "/img/sneakers/nike-air-huarache.jpg",
    },
];

function App() {
    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>All Items</h1>
                    <div className="search-block d-flex">
                        <img src="./img/search.svg" alt="Search" />
                        <input placeholder="Search..." />
                    </div>
                </div>
                <div className="d-flex">
                    {arr.map((obj) => (
                        <Card obj={obj} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
