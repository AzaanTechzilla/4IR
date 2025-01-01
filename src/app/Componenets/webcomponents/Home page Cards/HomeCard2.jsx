import H2 from "../../landing/Typography/H2";
import H5 from "../../landing/Typography/H5";
import Para from "../../landing/Typography/Para";

export default function HomeCard2({ items , index }) {
    return (
        <>
            <div className="Home-card2-content" key={index}>
                <figure>
                    <img src={items.img} alt="" />
                </figure>
                <div className="Home-card2-body">
                    <H5 title={items.title} className="text-center" />
                    <Para title={items.para} />
                </div>
            </div>
        </>
    )
}