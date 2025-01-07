import H2 from "@/app/Componenets/landing/Typography/H2";
import "./strategic.css";
import Banner from "@/app/Componenets/webcomponents/Banner/Banner";
import Para from "@/app/Componenets/landing/Typography/Para";
export default function StrategicCounseling() {
    return (
        <>
            <section className="banner2">
                <Banner classname="banner2-wrapper">
                    <div className="container">
                        <Banner.BannerContent classname="banner2-content">
                            <Banner.BannerBody classname="banner2-body">
                                <Banner.Heading title="AI-Driven Strategic Consulting Services" titleclassname="banner2-heading text-center" />
                                <Banner.Para title="We partner with businesses to navigate digital transformation through the power of AI, offering strategic guidance and cutting-edge solutions. Together, we'll streamline your operations, delight your customers, and build a future-ready organization." paraclassname="text-center" />
                            </Banner.BannerBody>
                        </Banner.BannerContent>
                    </div>
                </Banner>
            </section>
            <section className="strategic">
                <div className="strategic-wrapper">
                    <div className="container">
                        <div className="strategic-content">
                            <H2 title="A Well-Rounded Approach to AI: 4IR's Holistic Guidance" className="text-center" />
                            <Para title="We know that successful AI adoption is more than just implementing technology. It's about considering the bigger picture. Our comprehensive AI strategic counseling takes everything into account:" className="text-center" />
                        </div>
                        <div className="strategic-box">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}