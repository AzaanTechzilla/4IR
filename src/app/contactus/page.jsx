'use client'
import Banner from "../Componenets/webcomponents/Banner/Banner";
import "@/css/widget.css";
import "@/css/contact.css"
import H3 from "../Componenets/landing/Typography/H3";
import Para from "../Componenets/landing/Typography/Para";
import { SlCallEnd } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Accordion } from "reactstrap";
import Data from "../db.json"
import { useState } from "react";
import H2 from "../Componenets/landing/Typography/H2";
import AccordianComponent from "../Componenets/webcomponents/Accordian/AccordianComponent";
import Image from "next/image";
import Demo from "../../../public/assets/images/demo.png"
export default function Contact() {
    const [open, setOpen] = useState(null);

    const toggle = (id) => {
        setOpen((prevOpen) => (prevOpen === id ? null : id));
    };
    return (
        <>
            <section className="banner2">
                <Banner classname="banner2-wrapper">
                    <div className="container">
                        <Banner.BannerContent classname="banner2-content">
                            <Banner.BannerBody classname="banner2-body">
                                <Banner.Heading title="Contact Us" titleclassname="banner2-heading text-center" />
                                <Banner.Para title="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." paraclassname="text-center banner2-para" />
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
            <section className="freedemo">
                <div className="freedemo-wrapper">
                    <div className="container">
                        <div className="freedemo-content">
                            <H2 title="Get a Free Demo" className="text-center" />
                            <figure className="d-flex justify-content-center mt-2 mt-md-3 mt-lg-5">
                                <Image src={Demo} alt="demo" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Accordian">
                <div className="Accordian-wrapper">
                    <div className="container">
                        <H2 title="Frequently Asked Questions" className="text-center" />
                        <div className="accordian-parent">
                            <Accordion open={open} toggle={toggle} style={{
                                '--bs-accordion-bg': '#090B0C',
                                '--bs-accordion-btn-color': '#fff',
                                '--bs-accordion-active-bg': '#090B0C',
                                '--bs-accordion-active-color': '#fff',
                                '--bs-accordion-btn-focus-box-shadow': '0px 4px 22.6px 0px #3104707D',
                                '--bs-accordion-border-color': '#fff',
                                '--bs-accordion-border-width': '2px'
                            }}>
                                {Data.accordian.map((items, index) => (
                                    <AccordianComponent items={items} key={index} />
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}