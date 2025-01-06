import Banner from "../Componenets/webcomponents/Banner/Banner";
import "@/css/widget.css";
import "@/css/contact.css"
import H3 from "../Componenets/landing/Typography/H3";
import Para from "../Componenets/landing/Typography/Para";
import { SlCallEnd } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
export default function Contact() {
    return (
        <>
            <section className="banner2">
                <Banner classname="banner2-wrapper">
                    <div className="container">
                        <Banner.BannerContent classname="banner2-content">
                            <Banner.BannerBody classname="banner2-body">
                                <Banner.Heading title="Contact Us" titleclassname="banner2-heading text-center" />
                                <Banner.Para title="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." paraclassname="text-center" />
                            </Banner.BannerBody>
                        </Banner.BannerContent>
                    </div>
                </Banner>
            </section>
            <section className="contactform">
                <div className="contactform-wrapper">
                    <div className="container">
                        <div className="contactform-parent">
                            <div className="contactform-left-content">
                                <div className="contactlocation">
                                    <H3 title="Contact Information" />
                                    <Para title="Integrating contact information into a CRM system communication." />
                                </div>
                                <div className="information">
                                    <div className="call">
                                        <SlCallEnd /> <span>636 174 914 <br />705-323-9264</span>
                                    </div>
                                    <div className="email">
                                        <CiMail /> <span>suport124@gmail.com</span>
                                    </div>
                                    <div className="location">
                                        <CiLocationOn /> <span>New York, USA</span>
                                    </div>

                                </div>

                            </div>
                            <div className="contactform-right-content">
                                <H3 title="Our Solutions:" />
                                <form>

                                    <div class="group">
                                        <label>Name</label>
                                        <input type="text" placeholder="Name" required />
                                    </div>

                                    <div class="group">
                                        <label>Email</label>
                                        <input type="text" placeholder="Email" required />
                                    </div>
                                    <div class="group">
                                        <label>Company Name</label>
                                        <input type="text" placeholder="Company Name" required />

                                    </div>
                                    <div class="group">
                                        <label>Website URL</label>
                                        <input type="text" placeholder="www.example.com" required />
                                    </div>
                                </form>
                                    <div class="group">
                                        <label>Who are you?</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="group message">
                                        <label>Message</label>
                                        <input type="text" placeholder="Write to here..." required />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}