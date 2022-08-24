import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import Cards from "./components/Cards/Cards";
import cardData from "./components/RawData/Data";


function App() {
    const cardElements = cardData.map((card) => {
        return <Cards key={card.id} card={card} />;
    });

    return (
        <div>
            <Navbar/>
            <Features/>
            <section className="cardlist">{cardElements}</section>
        </div>
    );
}

export default App;
