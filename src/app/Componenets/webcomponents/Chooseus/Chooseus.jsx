import H2 from "../../landing/Typography/H2";
import Para from "../../landing/Typography/Para";

export default function Chooseus() {
    return (
        <>
        <section className="ChooseUs-sec">
        <div className="ChooseUs-wrapper">
          <div className="container">
            <div className="ChooseUs-sec-content">
              <H2 title="Why Choose Us?" className="text-center" />
              <Para className="text-center" title="Because we're your guide to the future of business. We simplify complex technology, making it accessible and effective for your business. Our team of experts will work with you to identify your unique needs and develop super-charge solutions that drive growth." />
            </div>
          </div>
        </div>
      </section>
        </>
    )
}