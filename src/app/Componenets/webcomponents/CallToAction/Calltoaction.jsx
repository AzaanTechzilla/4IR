import H2 from "../../landing/Typography/H2";
import Para from "../../landing/Typography/Para";

export default function CallToAction() {
    return (
        <>
            <section className="calltoaction">
                <div className="calltoaction-wrapper">
                    <div className="container">
                        <div className="calltoaction-content">
                            <div className="calltoaction-content-center">
                                <H2 title="Ready to get started?" className="calltoaction-title text-center" />
                                <Para className="calltoaction-para text-center" title="We are here to help you grow your business. Talk to us today and let us help you take your business to the next level." />
                                <a href="#" className="btn">Book a Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}