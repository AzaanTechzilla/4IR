'use client'
import "@/css/home.css"
import Image from "next/image";
import Robot from "../../public/assets/images/landing/robot.png";
import H1 from "./Componenets/landing/Typography/H1";
import Logo from "../../public/assets/images/4IRonlyLogo.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import "@/css/home.css";
import background from "../../public/assets/images/landing/RoundBlue.gif";
import SecondBannerImg from "../../public/assets/images/second-banner-img.png";
import H2 from "./Componenets/landing/Typography/H2";
import { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Data from "./db.json"
import Para from "./Componenets/landing/Typography/Para";
import GenerateLeadBox from "./Componenets/webcomponents/GenerateLeadBox/GenerateLeadBox";
import "@/css/widget.css"
import AccordianComponent from "./Componenets/webcomponents/Accordian/AccordianComponent";
import {
  Accordion

} from 'reactstrap';
import { FaArrowRight } from "react-icons/fa";

import Card from "./Componenets/webcomponents/Home page Cards/Card";
import Chooseus from "./Componenets/webcomponents/Chooseus/Chooseus";
import CallToAction from "./Componenets/webcomponents/CallToAction/Calltoaction";
export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio("/assets/landingimage/heather-audio.wav"));
    }
  }, []);
  const toggle = (id) => {
    setOpen((prevOpen) => (prevOpen === id ? null : id));
  };
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  const handlePlayPause = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <section className="banner">
        <div className="banner-wrapper">
          <div className="container">
            <div className="banner-content">
              <div className="banner-left">
                <span className="revolution-span">FOURTH INDUSTRIAL REVOLUTION INC</span>
                <div style={{ alignSelf: "center" }}>

                  <H1 className="banner-title" title="EMPOWER YOUR BUSINESS WITH " />
                  <span className="banner-title-span" >
                    <div className="ai-Driven">

                      <figure className="fit-width" >
                        <Image src={Logo} alt="Logo" />
                      </figure>

                      AI-DRIVEN
                    </div>
                  </span>
                  <H1 title="SUCCESS" className="success" />
                </div>
                <div className="banner-list">
                  <span><IoIosCheckmarkCircle /> AI Appointment Marketing</span>
                  <span><IoIosCheckmarkCircle /> Business Growth Strategy</span>
                  <span><IoIosCheckmarkCircle /> Innovative Tech Consulting</span>
                  <span><IoIosCheckmarkCircle /> Advance Training Program</span>
                  <span><IoIosCheckmarkCircle /> AI Driven Solutions</span>
                </div>
              </div>
              <div className="banner-right">
                <figure className="back-image">
                  <Image src={background} alt="background" />
                </figure>
                <figure className="robot-image">
                  <Image src={Robot} alt="Robot Images" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="second-section">
        <div className="second-section-wrapper">
          <div className="container">
            <div className="second-section-content">
              <div className="second-section-left">
                <Image src={SecondBannerImg} alt="second-banner" />
              </div>
              <div className="second-section-right">
                <div className="second-section-right-content">
                  <span className="second-section-heading">What is 4IR</span>
                  <H2 title="Fourth Industrial Revolution Inc." />
                  <p>
                    At Fourth Industrial Revolution Inc., we are dedicated to guiding businesses through the transformative power of artificial intelligence. With a team of seasoned experts at the helm, specializing in AI consulting and product solutions, we provide tailored AI solutions that propel your business into the future. Our mission is simple yet ambitious: to empower organizations to thrive in the dynamic landscape of the Fourth Industrial Revolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Demo">
        <div className="Demo-wrapper">
          <div className="container">
            <div className="Demo-content">
              <H2 title="A Demo From Our One Solution" className='text-center' />
              <div className="Demo-video">
                <div
                  onClick={() => {
                    handlePlayPause();
                    toggleAnimation();
                  }}
                  className="d-flex justify-content-center"
                >
                  {isAnimating ? (

                    <div
                      className={`audio-button ${isAnimating ? "animating" : ""}`}
                    >
                      <div className="wave-icon">
                        <div className="wave wave1"></div>
                        <div className="wave wave2"></div>
                        <div className="wave wave3"></div>
                        <div className="wave wave4"></div>
                        <div className="wave wave5"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="play-btn d-flex justify-content-center">
                      <FaPlay color="blue" className="ms-2" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth-section">
        <div className="fourth-section-wrapper">
          <div className="container">
            <div className="fourth-section-content">
              <H2 title="How do you fit into 4IR" className='text-center' />
              <div className="fourth-sec-card">
                {Data.homecard1.map((items, index) => {
                  return (
                    <>
                      <Card classname="forth-box" index={index}>
                        <Card.Image src={items.img} alt="" imgclass="card-img-top" />
                        <Card.Body cardbody="forth-box-body">
                          <Card.Title title={items.title} titleclass="forth-box-title" />
                          <Card.Para para={items.para} paraclass="forth-box-para" />
                        </Card.Body>
                      </Card>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="generateLead-sec">
        <div className="generateLead-wrapper">
          <div className="container">
            <div className="generateLead-content">
              <div>
                <H2 title="How 4IR help businesses generate leads" className="text-center" />
                <Para title="At 4IR Inc., we're not just tech geeks; we're your partners in growth. We use the latest AI and data magic to help your business find and connect with the right people." className='text-center' />
              </div>
            </div>
            <div className="generateLead">
              <GenerateLeadBox data={Data.generateleadbox} />
            </div>
          </div>
        </div>
      </section>
      <Chooseus />
      <section className="IndustrySolution" >
        <div className="IndustrySolution-wrapper">
          <div className="container">
            <H2 title="Industry-specific Solutions" className="text-center" />
            <div className="Home-card2">
              {Data.industrysolutionbox.map((items, index) => {
                return (
                  <>
                    <Card classname="Home-card2-content" index={index}>
                      <Card.Image src={items.img} alt="" />
                      <Card.Body cardbody="Home-card2-body">
                        <Card.Title title={items.title} titleclass="text-center" />
                        <Card.Para para={items.para} />
                      </Card.Body>
                    </Card>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="Team">
        <div className="Team-wrapper">
          <div className="container">
            <div className="Team-content">
              <H2 title="Meet our team." className="text-center" />
              <Para title="Empowers users to create, customize, collaborate, and track seamlessly, streamlining project tasks for optimal efficiency." />
            </div>
            <div className="Team-card">
              {Data.team.map((items, index) => {
                return (
                  <>
                    <Card classname={items.classname} index={index}>
                      <Card.Image src={items.img} alt="" />
                      <Card.Body cardbody="team-member-content">
                        <Card.Title title={items.name} />
                        <Card.Para para={items.designation} />
                      </Card.Body>
                    </Card>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="Blog">
        <div className="Blog-wrapper">
          <div className="container">
            <div className="Blog-content">
              <H2 title="Our Latest Blog" className="text-center" />
              <div className="Blog-parent">
                {Data.blog.map((items, index) => {
                  return (
                    <>
                      <Card classname="blog-card" index={index}>
                        <Card.Image src={items.img} alt="" />
                        <Card.Body cardbody="blog-card-content">
                          <Card.Title title={items.title} />
                          <Card.Para para={items.para} />
                          <Card.Button button="Read More" buttonclass="blogreadmore" icon={<FaArrowRight />} />
                        </Card.Body>
                      </Card>
                    </>
                  )
                })}
              </div>
              <a href='' className="viewbtn">View More <FaArrowRight /></a>
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
                '--bs-accordion-btn-focus-box-shadow':'0px 4px 22.6px 0px #3104707D ',
                '--bs-accordion-border-color': '#fff',
                '--bs-accordion-border-width': '2px'
              }}>
                {Data.accordian.map((items, index) => {
                  return (
                    <AccordianComponent items={items} key={index} />
                  )
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
