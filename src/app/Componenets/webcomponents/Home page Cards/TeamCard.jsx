import H5 from "../../landing/Typography/H5";
import Para from "../../landing/Typography/Para";

export default function TeamCard({ items, index }) {
    return (
        <>
            <div className={items.classname} key={index}>
                <figure>
                    <img src={items.img} alt="" />
                </figure>
                <div className="team-member-content">
                    <H5 title={items.name} />
                    <Para title={items.designation} />
                </div>
            </div>
        </>
    )
}