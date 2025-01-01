import H5 from "../../landing/Typography/H5";
import Para from "../../landing/Typography/Para";
import { FaArrowRight } from "react-icons/fa";
export default function BlogCards({ items, index }) {
    return (
        <>
            <div className="blog-card" key={index}>
                <figure>
                    <img src={items.img} alt="" />
                </figure>
                <div className="blog-card-content">
                    <H5 title={items.title} />
                    <Para title={items.para} />
                    <a href='' style={{display: "flex", alignItems: "center"}}>Read More <FaArrowRight /></a>
                </div>
            </div>
        </>
    )
}