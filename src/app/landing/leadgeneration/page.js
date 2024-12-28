"use client"
// import Layout from "../../../Componenets/landing/layout";
import { useState } from "react";
import "./leadgeneration.css";
import "../../../../public/assets/css/Global.css";
import "../../Componenets/landing/widgets.css"
import Para from "../../Componenets/landing/Typography/Para";
import H6 from "../../Componenets/landing/Typography/H6";
import { LuArrowRight } from "react-icons/lu";
import SiteLogo from "../../Componenets/landing/SiteLogo";
import YoutubeVideo from "../../Componenets/landing/YoutubeVideo";
import H2 from "../../Componenets/landing/Typography/H2";
import Card2 from "../../Componenets/landing/cards/Card2";
import Card4 from "../../Componenets/landing/cards/Card4";
import Card3 from "../../Componenets/landing/cards/Card3";
import Model from "../../Componenets/landing/Model/Model";
import Head from "next/head";
import AiPoweredCard from "../../Componenets/landing/aiPoweredcard/aiPoweredCard";
import Image from "next/image";
import clientRreview from "@/landingimage/client-review.png";
import Accordian from "../../Componenets/landing/Accordian/Accordian";
import Slider2 from "../../Componenets/landing/sllider/Slider2";
import CarolHuston from "../../../../public/assets/images/landing/ai_talk_assist/CarolHuston.png"
import JimThiel from "../../../../public/assets/images/landing/ai_talk_assist/JimThiel .png"
import TobyWoods from "../../../../public/assets/images/landing/ai_talk_assist/TobyWoods.png"
export default function AiVoiceCalling() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const Leads = [
    {
      id: 1,
      img: "/assets/landingimage/vectors/icon-1.png",
      title: "Futile Lead Qualification",
      para: "Wasting time on low-quality leads.",
    },
    {
      id: 2,
      img: "/assets/landingimage/vectors/icon-2.png",
      title: "Manual Outreach",
      para: "Time-consuming and prone to human error.",
    },
    {
      id: 3,
      img: "/assets/landingimage/vectors/icon-3.png",
      title: "Delayed Follow-ups",
      para: " Losing potential customers due to slow response times.",
    },
    {
      id: 4,
      img: "/assets/landingimage/vectors/icon-4.png",
      title: "Inconsistent Messaging",
      para: "Delivering inconsistent brand messaging.",
    },
    {
      id: 5,
      img: "/assets/landingimage/vectors/icon-5.png",
      title: "Futile Lead Qualification",
      para: "Struggling to keep up with increasing demand.",
    },
  ];
  const SeamslessApi = [
    {
      id: 1,
      title: "Identify High-Quality Leads",
      para: "Use advanced AI algorithms to identify and prioritize the most promising leads.",
    },
    {
      id: 2,
      title: "Automate Outreach",
      para: "Conduct personalized voice calls and email campaigns at scale.",
    },
    {
      id: 3,
      title: "Improve Conversion Rates",
      para: "Enhance lead engagement and drive more conversions.",
    },
    {
      id: 4,
      title: "Provide Real-Time Insights",
      para: "Gain valuable insights into lead behavior and campaign performance.",
    },
  ];
  const FutureCardapi = [
    {
      id: 1,
      title: "AI-Powered Lead Generation",
      description: "Identify and qualify high-quality leads.",
      className: "Salesaicards",
    },
    {
      id: 2,
      title: "Intelligent Scripting",
      description: "Generate dynamic scripts tailored to each lead",
      className: "Salesaicards",
    },
    {
      id: 3,
      title: "Automated Voice Calling",
      description: "Conduct personalized voice calls at scale.",
      className: "Salesaicards",
    },
    {
      id: 4,
      title: "Seamless Integration",
      description: "Easily integrate with your CRM and marketing tools.",
      className: "Salesaicards",
    },
  ];
  const aiPoweredIndustries = [
    {
      id: 1,
      title: "Real Estate",
      image: "/assets/landingimage/Real estate.png",
      para: "Generate leads for property listings, schedule showings, and follow up with potential buyers.",
    },
    {
      id: 2,
      title: "Automotive",
      image: "/assets/landingimage/automotive 1.png",
      para: " Identify potential car buyers, book test drives, and provide personalized product information.",
    },
    {
      id: 3,
      title: "Financial Services",
      image: "/assets/landingimage/financial 1.png",
      para: "Acquire new customers, schedule consultations, and provide financial advice",
    },
    {
      id: 4,
      title: "Insurance",
      image: "/assets/landingimage/insurance 1.png",
      para: " Generate leads for insurance policies, schedule appointments, and follow up with potential clients.",
    },
    {
      id: 5,
      title: "Healthcare Providers",
      image: "/assets/landingimage/first-aid-kit 1.png",
      para: "Schedule appointments, remind patients of upcoming appointments, and follow up on patient satisfaction.",
    },
    {
      id: 6,
      title: "Pharmaceutical",
      image: "/assets/landingimage/pharmacy 1.png",
      para: "Promote new drugs, schedule doctor visits, and provide product information to healthcare professionals.",
    },
  ];
  const aiPoweredIndustriescard2 = [
    {
      id: 1,
      title: "Collage and Universities",
      image: "/assets/landingimage/university 1.png",
      para: " Recruit new students, schedule campus tours, and follow up with prospective students.",
    },
    {
      id: 2,
      title: "Online Education Providers",
      image: "/assets/landingimage/gratitude 1.png",
      para: "Generate leads for online courses, schedule consultations, and provide course information.",
    },
    {
      id: 3,
      title: "Software Companies",
      image: "/assets/landingimage/computer-business 1.png",
      para: "Generate leads for software products, schedule demos, and follow up with potential customers.",
    },
    {
      id: 4,
      title: "Hardware Companies",
      image: "/assets/landingimage/configuration 1.png",
      para: "Generate leads for hardware products, schedule consultations, and provide product information.",
    },
  ];
  const SliderDataLead = [
    {
      id: 1,
      clientName: "Improve lead qualification:",
      testimonial: "Prioritize leads based on their potential value.",
    },
    {
      id: 2,
      clientName: "Optimize marketing efforts:",
      testimonial:
        "Measure the effectiveness of marketing campaigns and adjust strategies accordingly.",
    },
    {
      id: 3,
      clientName: "Improve lead qualification:",
      testimonial: "Prioritize leads based on their potential value.",
    },
  ];
  const Accordianapi = [
    {
      id: 1,
      accordianid: "headingOne",
      collapseid: "collapseOne",
      datatargetid: "#collapseOne",
      title:
        "How does your AI-powered solution integrate with my existing sales process?",
      value: true,
      show: "show",
      heading:
        "Our solution can be seamlessly integrated with your CRM and marketing automation tools. You can use it to:",
        ulitems: [
          {
            liItems:
              "Import and export leads",
          },
          {
            liItems:
              "Sync call logs and lead statuses",
          },
          {
            liItems:
              "Trigger automated follow-ups",
          },
          {
            liItems:
              "Generate custom reports",
          },
        ],
    },
    {
      id: 2,
      accordianid: "headingTwo",
      collapseid: "collapseTwo",
      title: "Can I customize the AI-generated scripts and voice messages?",
      datatargetid: "#collapseTwo",
      value: false,
      heading:
        "Yes, you can customize the scripts and voice messages to match your brand voice and messaging. You can also set specific guidelines for the AI to follow.",
    },
    {
      id: 3,
      accordianid: "headingThree",
      collapseid: "collapseThree",
      title: "How secure is my data?",
      datatargetid: "#collapseThree",
      value: false,
      heading:
        "We prioritize data security and privacy. Our platform is built on robust security measures to protect your sensitive information.",
    },
    {
      id: 4,
      accordianid: "headingFour",
      collapseid: "collapseFour",
      title: "What kind of training data is required to get started?",
      datatargetid: "#collapseFour",
      value: false,
      heading:
        "Our AI models can be trained on a variety of data sources, including your existing sales data, industry-specific data, and public datasets.",
    },
  ];
  
return (
  <>
    <Head>
      <title> Revolutionize Your Sales with AI-Powered Lead Generation & Voice Calling | 4IR</title>
    </Head>
    {/* <Layout> */}
      {showModal && <Model close={handleCloseModal} />}
      <section className="banner">
        <div className="banenr-wrapper">
        <div class="lines">
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
            <div class="line-container">
              <div class="animated-line"></div>
            </div>
          </div>

          <div className="container">
            <div className="banner-content">
              <div className="banner-logo d-flex flex-column align-items-center">
                <figure className="text-center banner-logo-1">
                  <SiteLogo width="65%" height="auto" />
                </figure>
                <div className="banner-heading-top">
                  <Para title="Tired of Chasing Leads?" />
                </div>
                <div className="banner-second-heading text-center">
                  <h1>
                    Let <span>AI Handle</span> The Heavy Lifting
                  </h1>
                  <p>
                    Say goodbye to time-comsuming munual process Ai Talk Assist takes care of Lead Generation and follow-up, so you can focus on{" "}
                    <span className="text-white fw-bold">
                      Closing deals
                    </span>
                  </p>
                  <H6
                    title="24/7 Availability . Easy-Integration . No complex Software"
                    className="text-white fs-4"
                  />
                  <button className="btn-2 " onClick={handleOpenModal}>
                    Book a Demo <LuArrowRight size={22} />
                  </button>
                </div>
              </div>
            </div>
            <div className="youtube-video-main">
                <div className="youtube-video-video">
                <YoutubeVideo
                src={"https://www.youtube.com/embed/tgbNymZ7vqY"}
                width={"100%"}
                height={"100%"}
                />
                </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div class="leads-wrapper">
          <div class="container">
            <div class="text-center">
              <div className="leads-upper-content">
                <div className="banner-heading-top">
                  <Para title="Struggling to Convert Leads?" />
                </div>
                <H2 title="Are these common sales challenges Holding back your growth?" />
              </div>
              <div className="leads-lower-content">
                {Leads?.map((items, index) => {
                  return (
                    <>
                      <Card2 items={items} index={index} />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper-3">
          <div className="container">
            <div className="row">
              <div class="strugling-content text-center">
                <div className="strugling-upper-content d-flex flex-column align-items-center">
                  <div className="banner-heading-top">
                    <div className="strugling-para">
                      <Para title="4IR: Your AI-Powered Sales Growth Engine" />
                    </div>
                  </div>
                  <H2
                    title="Seamless Integration, Exceptional Results"
                    className=""
                  />
                  <Para
                    title="Integrate our AI-powered voice calling and lead generation solution into your existing sales process. Our platform is designed to:"
                    className="strugling-para2"
                  />
                  <button className="btn-2" onClick={handleOpenModal}>
                    Start a free Trail{" "}
                    <LuArrowRight size={22} />
                  </button>
                </div>
              </div>
            </div>

            <div className="strugling-lower-content">
              {SeamslessApi?.map((items, index) => {
                return (
                  <>
                    <Card4 items={items} index={index} />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="timeline">
        <div className="timeline-wrapper">
          <div class="container">
            <div className="timeline-heading">
              <H2 title="How it Works?" className="text-center" />
            </div>
            <div className="timeline-content mt-5 ">
              <div class="timeline-left">
                <div
                  class="nav flex-column gap-3 nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    class="nav-link position-relative active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    Onboarding
                  </button>
                  <button
                    class="nav-link position-relative"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    Marketing Management
                  </button>
                  <button
                    class="nav-link position-relative"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    Lead Generation & Management
                  </button>
                  <button
                    class="nav-link position-relative"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    AI-Powered Lead Follow-up
                  </button>
                </div>
              </div>
              <div class="timeline-right">
                <div class="tab-content" id="v-pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="d-flex gap-3 timeline-right-content mb-3">
                      <div className="number text-white ">
                        <span className=" number-span">1</span>
                      </div>
                      <div>
                        <h6>Initial Consultation: </h6>
                        <p>
                          Well schedule a call to understand your business
                          goals and specific needs.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-3 timeline-right-content mb-3">
                      <div className="number text-white ">
                        <span className=" number-span">2</span>
                      </div>
                      <div>
                        <h6>Platform Setup: </h6>
                        <p>
                          {" "}
                          Well set up your account on our platform, ensuring
                          its tailored to your business.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex timeline-right-content gap-3 mb-3">
                      <div className="number text-white ">
                        <span className="number-span">3</span>
                      </div>
                      <div>
                        <h6>Data Integration: </h6>
                        <p>
                          {" "}
                          Well integrate your existing customer data (if
                          applicable) to provide a seamless experience.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="d-flex gap-3 timeline-right-content mb-3">
                      <div className="number text-white">
                        <span className=" number-span">1</span>
                      </div>
                      <div>
                        <h6>Strategic Planning: </h6>
                        <p>
                          Our marketing experts will develop a customized marketing strategy aligned with your business objectives.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-3 timeline-right-content mb-3">
                      <div className="number text-white">
                        <span className="number-span">2</span>
                      </div>
                      <div>
                        <h6>Campaign Execution: </h6>
                        <p>
                          Well implement a range of marketing tactics, including.
                        </p>
                        <ul className="list-unstyle text-light">
                          <li><span className="fw-bold">Social Media Marketing: </span><p>Creating engaging content and running targeted ads on platforms like Facebook, Instagram, and LinkedIn.</p></li>
                          <li><span className="fw-bold">Pay-Per-Click (PPC) Advertising:</span><p> Running targeted ads on Google and other search engines.</p></li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex timeline-right-content gap-3 mb-3">
                      <div className="number text-white ">
                        <span className="number-span">3</span>
                      </div>
                      <div>
                        <h6>Performance Tracking: </h6>
                        <p>
                          Well monitor key metrics to measure the effectiveness of our marketing efforts and make data-driven adjustments.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="d-flex gap-3 timeline-right-content mb-3">
                      <div className="number text-white ">
                        <span className="number-span">1</span>
                      </div>
                      <div>
                        <h6>Lead Capture:</h6>
                        <p>
                          Our marketing campaigns will generate high-quality leads that are captured and stored in Go HighLevel.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-3 timeline-right-content mb-3">
                      <div className="number text-white ">
                        <span className="number-span">2</span>
                      </div>
                      <div>
                        <h6>Lead Qualification:
                        </h6>
                        <p>
                          Well qualify leads based on specific criteria to prioritize follow-up efforts.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex timeline-right-content gap-3 mb-3">
                      <div className="number text-white ">
                        <span className="number-span">3</span>
                      </div>
                      <div>
                        <h6>Lead Nurturing:</h6>
                        <p>
                          Well implement a lead nurturing strategy to keep leads engaged and move them through the sales funnel.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="d-flex gap-3 timeline-right-content mb-3">
                      <div className="number text-white ">
                        <span className="number-span">1</span>
                      </div>
                      <div>
                        <h6>Automated Follow-up:  </h6>
                        <p>
                          Our AI-powered voice calling system will automatically follow up with leads, saving you time and resources.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex gap-3 timeline-right-content mb-3">
                      <div className="number text-white ">
                        <span className="number-span">2</span>
                      </div>
                      <div>
                        <h6>Personalized Messages:</h6>
                        <p>

                          The AI will deliver personalized messages based on lead information and previous interactions.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex timeline-right-content gap-3 mb-3">
                      <div className="number text-white ">
                        <span className="number-span">3</span>
                      </div>
                      <div>
                        <h6>Efficient Lead Qualification: </h6>
                        <p>
                          The AI will quickly identify qualified leads and prioritize them for further follow-up.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex timeline-right-content gap-3 mb-3">
                      <div className="number text-white ">
                        <span className="number-span">4</span>
                      </div>
                      <div>
                        <h6>Enhanced Conversion Rates:</h6>
                        <p>
                          By consistently following up with leads, well increase the likelihood of conversions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="future">
        <div className="future-wrapper">
          <div className="container">
            <H2
              title="The Future of Sales is AI-Powered"
              className="text-center"
            />
            <Para
              title="Don't get left behind. Embrace the power of AI to transform your sales process."
              className="text-center mb-4"
            />
            <div className="aifuturecard">
              {FutureCardapi?.map((items, index) => {
                return <Card3 items={items} key={index} />;
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="aiPoweredIndustries">
        <div className="aiPoweredIndustries-wrapper">
          <div className="container">
            <div className="aiPoweredIndustries-content d-flex flex-column justify-content-center align-items-center">
              <H2
                title="Industries That Can Benefit from AI-Powered Lead Generation and Automated Voice Calling"
                className="text-center"
              />
              <Para
                title="Our AI-powered solution is versatile and can be applied to a wide range of industries."
                className="text-center"
              />
            </div>
            <div className="aiPoweredIndustries-first-grid d-flex justify-content-center flex-wrap gap-4">
              {aiPoweredIndustries.map((items, index) => {
                return <AiPoweredCard items={items} key={index} />;
              })}
            </div>
            <div className="aiPoweredIndustries-second-grid mt-4 d-flex justify-content-center align-item-center flex-wrap gap-4">
              {aiPoweredIndustriescard2.map((items, index) => {
                return (
                  <AiPoweredCard
                    items={items}
                    key={index}
                    className="aiPoweredIndustries-card2"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-wrapper">
          <div className="container">
            <div className="testimonial-heading">
              <H2
                title="By leveraging AI-powered lead generation and automated voice calling, businesses in these industries can:"
                className="text-center testimonial-h2"
              />
            </div>
            <div className="leadSidebar">
              <Slider2 />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="question-wrapper">
          <div className="container">
            <div className="question-heaing text-center">
              <H2 title="Frequently Asked Questions" />
              <p>Contact us via Support if you have any more questions.</p>
              <button className="btn-2" onClick={handleOpenModal}>Book a Consultation</button>
            </div>
            <div className="">
              {Accordianapi?.map((items, index) => {
                return (
                  <Accordian items={items} key={index} content={true} />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Client-Wrapper">
          <div className="container">
            <div className="row Client-mainbox">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="client-height1">
                  <div className="client-heading ">
                    <h5>Our Client Reviews</h5>
                    <p>Hear Directly from Our Satisfied Clients!</p>
                  </div>
                </div>
                <div className="client-height2">
                  <div className="clientbox">
                    <div className="d-flex justify-content-between pics-div">
                      <div className="d-flex justify-content-between clientcontent1">
                        <figure>
                          <Image src={clientRreview} alt="" />
                        </figure>
                        <p>KaiB -</p>
                        <p> 22 Jul</p>
                      </div>
                      <div className="stars d-flex">
                          <p>True Story Realty</p>
                        </div>
                    </div>
                    <div>
                    <Para
                          title="4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest"
                          className="clent-para1"
                        />
                    </div>
                  </div>
                  <div className="clientbox ">
                    <div className="d-flex justify-content-between pics-div">
                      <div className="d-flex justify-content-between clientcontent1">
                        <figure>
                          <Image src={TobyWoods} width={40} alt="" />
                        </figure>
                        <p>Toby -</p>
                          <p>28 Jul</p>
                      </div>
                      <div className="stars d-flex">
                          <p>NorthStar Systems, LLC</p>
                        </div>
                    </div>
                    <div>
                    <Para
                          title="Best of the best that about sums up my experience."
                          className="clent-para1"
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="clientbox">
                  <div className="d-flex justify-content-between pics-div">
                    <div className="d-flex justify-content-between clientcontent1">
                      <figure>
                      <Image src={JimThiel} alt="Jim img" width={40} />
                      </figure>
                      <p>Jim -</p>
                        <p> 12 Aug</p>
                      </div>
                      <div className="stars d-flex">
                        <p>Mortgage Advisor</p>
                      </div>
                  </div>
                  <div>
                  <Para
                        title="While many people are intimidated by AI, Barry has a way of making it practical and approachable. He's taen the mystery -- and the fear--out of it, showing us how AI can be a powerful tool in our arsenal. Thanks to Barry, we now see AI as a game-changer that frees up our time so we can focus on what truly matters--our clients."
                        className="clent-para1"
                      />
                  </div>
                </div>

                <div className="clientbox client-custombox ">
                  <div className="d-flex justify-content-between pics-div">
                    <div className="d-flex justify-content-between clientcontent1">
                      <figure>
                        <Image src={CarolHuston} width={38} alt="carolHuston" />
                      </figure>
                      <p>Carol -</p>
                        <p> 2 Sep</p>
                      </div>
                      <div className="stars d-flex">
                        <p>True Story Realty</p>
                      </div>
                  </div>
                  <div>
                  <Para
                        title="There commitment to helping clients incorporate AI and stay updated with the latest technologies is evident. Working with them has been both fun and rewarding, saving me ... "
                        className="clent-para2"
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* </Layout> */}
  </>
);
}
