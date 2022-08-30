import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Features from "./components/Features/Features";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import cardData from "./components/RawData/Data";

function App() {
    const cardElements = cardData.map((card) => {
        return <Cards key={card.id}  card={card}/>;
    });

    return (
        <div>
            <Navbar/>
            <Features/>
            <section className="card-list">
                {cardElements}
            </section>
            <Footer/>
        </div>
    );
}

export default App;
