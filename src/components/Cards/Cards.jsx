import './Cards.css'

export default function Card(props) {
    let badgeText;
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <div className={"card"}>
            {/* Check if the card object has openSpots > 0, if not the card is not visible */}
            {badgeText && <div className="status">{badgeText}</div>}
            <img src={require(`../../images/${props.card.coverImg}`)} className="card-image" alt=" "/>

            <div className="card-info">
                <img src={require("../../images/star.png")} className="star" alt="star-logo"/>
                <span>{props.card.stats.rating}</span>
                <span className="card-stats-gray">
                    ({props.card.stats.reviewCount}) • {props.card.location}
                </span>
            </div>

            <div className="card-title">
                <div>
                    <p>{props.card.title}</p>
                </div>
            </div>

            <div className={"card-price-details"}>
              <span>
                <b>From ${props.card.price}</b>
              </span> <span>/ person</span>
            </div>
        </div>
    )
}