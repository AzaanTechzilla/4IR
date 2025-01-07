'use client';
import { useState, useEffect } from "react";
import Banner from "../Componenets/webcomponents/Banner/Banner";
import "@/css/widget.css";
import "@/css/solutions.css";
import "../globals.css";
import H2 from "../Componenets/landing/Typography/H2";
import Para from "../Componenets/landing/Typography/Para";
import H4 from "../Componenets/landing/Typography/H4";
import Dammy from "../../../public/assets/images/solution-dammy.png";
import Image from "next/image";
import Clientreview from "../Componenets/webcomponents/Clientreview/Clientreview";
import Data from "../db.json";
import AccordianComponent from "../Componenets/webcomponents/Accordian/AccordianComponent";
import { Accordion } from "reactstrap";
import CallToAction from "../Componenets/webcomponents/CallToAction/Calltoaction";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function OurSolutions() {
  const [open, setOpen] = useState(null);
  
  const toggle = (id) => {
    setOpen((prevOpen) => (prevOpen === id ? null : id));
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".solution-left-content", {
      y: -500,
      duration: 2,
      scrollTrigger: {
        trigger: ".solution-right-img",
        scroller: "body",
        pin: true,
        scrub: 3,
      },
    });

    gsap.to(".solution-right-content", {
      y: -500,
      duration: 2,
      scrollTrigger: {
        trigger: ".solution-right-img",
        scroller: "body",
        pin: true,
        scrub: 3,
      },
    });
  }, []);

  return (
    <>
      <section className="banner2">
        <Banner classname="banner2-wrapper">
          <div className="container">
            <Banner.BannerContent classname="banner2-content">
              <Banner.BannerBody classname="banner2-body">
                <Banner.Heading title="Innovative AI Solutions to Drive Your Business Forward" titleclassname="banner2-heading text-center" />
                <Banner.Para title="Tired of the same old business-as-usual? Ready to unlock the full potential of your business? At 4IR Inc., we're not just tech geeks; we're your partners in innovation." paraclassname="text-center" />
              </Banner.BannerBody>
            </Banner.BannerContent>
          </div>
        </Banner>
      </section>
      <section className="oursolutions">
        <div className="oursolutions-wrapper">
          <div className="container">
            <div className="oursolutions-content">
              <H2 title="Our Solutions" className="text-center mb-1 md-mb-3" />
              <Para title="At 4IR Inc., we offer a comprehensive suite of AI-powered solutions to help you achieve your business goals." className="text-center" />
            </div>
            <div className="solution-slide">
              <div className="solution-left-content">
                <H4 title="AI Talk Assist" />
                <Para title="Empower your team with AI-powered conversation solutions. Our AI Talk Assist technology improves customer satisfaction." />
                <a href="">Read More</a>
              </div>
              <div className="solution-right-img">
                <figure>
                  <Image src={Dammy} alt="" />
                </figure>
              </div>
              <div className="solution-right-content">
                <H4 title="AI Talk Assist" />
                <Para title="Our AI Talk Assist technology enables seamless communication and automates routine tasks." />
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-review">
        <div className="clientreview-wrapper">
          <div className="container">
            <H2 title="Client Review" className="text-center mb-5" />
            <Clientreview data={Data.clientreview} />
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
      <CallToAction />
    </>
  );
}
