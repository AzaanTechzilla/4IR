import H5 from "../../landing/Typography/H5";
import Para from "../../landing/Typography/Para";

export default function HomeCard1({ items }) {
    return (
        <div className="forth-box"  >
            <figure>
                <img src={items.img} class="card-img-top" alt="" />
            </figure>
            <div class="forth-box-body">
                <H5 title={items.title} className="forth-box-title" />
                <Para title={items.para} className="forth-box-para" />
            </div>
        </div>
    )
}