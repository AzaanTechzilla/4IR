'use client';
import React, { useState } from "react";
import Image from "next/image";
import H2 from "../Componenets/landing/Typography/H2";
import Para from "../Componenets/landing/Typography/Para";
import ForthImage from "../../../public/assets/images/damyy.png";
import '@/css/about.css';
import H5 from "../Componenets/landing/Typography/H5";
import Card from "../Componenets/webcomponents/Home page Cards/Card";
import Data from "../db.json";
import Chooseus from "../Componenets/webcomponents/Chooseus/Chooseus";
import AccordianComponent from "../Componenets/webcomponents/Accordian/AccordianComponent";
import {
  Accordion

} from 'reactstrap';
import CallToAction from "../Componenets/webcomponents/CallToAction/Calltoaction";
export default function Aboutus() {
     const [open, setOpen] = useState(null);
    const toggle = (id) => {
        setOpen((prevOpen) => (prevOpen === id ? null : id));
      };
    return (
        <>
        <section className="aboutfirst-sec">
            <div className="aboutfirst-wrapper">
                <div className="container">
                    <div className="aboutfirst-content">
                        <div className="aboutfirst-left">
                            <H2 title='Empowering Businesses with AI' />
                        </div>
                            <div className="aboutfirst-right">
                                <Para title='In todays rapidly evolving technological landscape, artificial intelligence (AI) has emerged as a powerful force, transforming industries and redefining business models. At 4IR Inc., were at the forefront of this digital revolution, harnessing the power of AI to drive innovation and growth.' />
                            </div>
                            <figure className="figure">
                                <Image src={ForthImage} alt="about img"/>
                            </figure>
                            <div className="aboutfirst-box1">
                                <H5 title='Our Missions' />
                                <Para title='Our mission is to empower organizations to navigate the complexities of the Fourth Industrial Revolution and achieve sustainable growth. We strive to be a catalyst for digital transformation, helping businesses harness the full potential of AI' />
                              </div>
                            <div className="aboutfirst-box2">
                                <H5 title='Our Visions' />
                                <Para title='Our mission is to empower organizations to navigate the complexities of the Fourth Industrial Revolution and achieve sustainable growth. We strive to be a catalyst for digital transformation, helping businesses harness the full potential of AI' />
                             </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="aboutsecond-sec">
            <div className="aboutsecond-wrapper">
                <div className="container">
                    <div className="aboutsecond-content">
                        <div className="aboutsecond-left">
                            <H2 title='What We Do' />
                        </div>
                        <div className="aboutsecond-right">
                            <Para title="At 4IR Inc., we're dedicated to empowering businesses with the transformative power of artificial intelligence. We specialize in providing innovative AI solutions and strategic consulting services that help organizations achieve their goals." />
                            <Para title="Our target audience includes a diverse range of businesses, from small startups to large enterprises, across various industries such as healthcare, finance, retail, manufacturing, and more. We cater to organizations that are looking to leverage AI to improve efficiency, enhance customer experiences, and gain a competitive edge." />
                        </div>
                    </div>
                        <div className="aboutboxes">
                            {Data.aboutbox.map((items, index)=>{

                                return(

                            <Card classname="aboutbox-content" index={index} >
                                <Card.Title title={items.number} />
                                <Card.Para para={items.para} />
                            </Card>
                                )
                            })}
                        </div>
                </div>
            </div>
        </section>
        <Chooseus />
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
                {Data.aboutaccordian.map((items, index) => {
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
    )
}