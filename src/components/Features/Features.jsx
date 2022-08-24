import gridImage from '../../images/grid.png';
import './Features.css'

export default function Features() {
    const featuresText = "Join unique interactive activities\n" +
        "                     led by one-of-a-kind hosts — all either " +
        "at exotic locations or\n" +
        "                     at the comfort of your home.";

    return (
        <section className={"features"}>
            <img className={"features-photo"} src={gridImage} alt={"grid-photo"}/>
            <div className={"features-all"}>
                <h1 className={"features-title"}>Online Experiences</h1>
                <p className={"features-details"}>{featuresText}</p>
            </div>
        </section>
    )
}