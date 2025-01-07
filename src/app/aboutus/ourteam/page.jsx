'use client'
import Banner from "@/app/Componenets/webcomponents/Banner/Banner";
import "@/css/widget.css";
import "./expert-team.css"
import Data from "../../db.json";
import Card from "@/app/Componenets/webcomponents/Home page Cards/Card";
import H2 from "@/app/Componenets/landing/Typography/H2";
import Para from "@/app/Componenets/landing/Typography/Para";
import { Accordion } from "reactstrap";
import AccordianComponent from "@/app/Componenets/webcomponents/Accordian/AccordianComponent";
import { useState } from "react";
export default function OurTeam() {
      const [open, setOpen] = useState(1);
    
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
                                <Banner.Heading title="Our Expert Team" titleclassname="banner2-heading text-center" />
                                <Banner.Para title="On 'The Path to Success,' you will encounter challenges and obstacles that test your resolve. But with determination and perseverance." paraclassname="text-center expert-para" />
                            </Banner.BannerBody>
                        </Banner.BannerContent>
                    </div>
                </Banner>
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
                '--bs-accordion-btn-focus-box-shadow': '0px 4px 22.6px 0px #3104707D ',
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
        </>
    )
}