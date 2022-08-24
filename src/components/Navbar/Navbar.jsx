import './Navbar.css';

export default function Navbar() {
    const imageUrl =
      "https://1000marcas.net/wp-content/uploads/2020/01/Logo-Airbnb-1536x557.png"

    return (
        <nav>
            <img
                className={"nav--logo"}
                src={imageUrl} alt={"logo"}/>
        </nav>
    )
}