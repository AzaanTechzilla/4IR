"use client"
import React from "react";
import { useState, useEffect } from "react";
import "./aitalkassist.css"
import "@/Landingcomponent/widgets.css";
import SecondSecBox from "../../Componenets/landing/Second-Section Box/Second-sec-box";
import Para from "../../Componenets/landing/Typography/Para";
import { FiCheck } from "react-icons/fi";
import H1 from "../../Componenets/landing/Typography/H1";
import H3 from "../../Componenets/landing/Typography/H3";
import H5 from "../../Componenets/landing/Typography/H5";
import H6 from "../../Componenets/landing/Typography/H6";
import Card1 from "../../Componenets/landing/cards/Card1";
import H2 from "../../Componenets/landing/Typography/H2";
import Accordian from "../../Componenets/landing/Accordian/Accordian";
import cardsStats from "@/landingimage/cardsStats.png";
import Productstats from "@/landingimage/ProductStat.png";
import MapSection from "@/landingimage/vectors/MapSection.png";
import H4 from "../../Componenets/landing/Typography/H4";
import { GiSevenPointedStar } from "react-icons/gi";
import Image from "next/image";
import Calltoaction from "../../Componenets/landing/CalltoAction/Calltoaction";
import Slider from "../../Componenets/landing/Slider";
import Card3 from "../../Componenets/landing/cards/Card3";
import YoutubeVideo from "../../Componenets/landing/YoutubeVideo";
import SiteLogo from "../../Componenets/landing/SiteLogo";
import Head from "next/head";
import Model from "../../Componenets/landing/Model/Model";
import { FaPlay } from "react-icons/fa";
import TawkToIntegration from '../../Componenets/landing/TawkToIntegration';
// import jimImg from "@/images/landing/ai_talk_assist/JimThiel .png";
// import tobyImg from "@/images/landing/ai_talk_assist/TobyWoods.png";
// import carolImg from "@/images/landing/ai_talk_assist/CarolHuston.png";
export default function Index() {
  const SecondBox = [
    {
      id: 1,
      title: "Losing leads due to slow responses.",
    },
    {
      id: 2,
      title: "Overwhelmed by too many leads and not enough follow-ups.",
    },
    {
      id: 3,
      title: "Frustrated with outdated sales processes or limited AI tool",
    },
    {
      id: 4,
      title: "Trouble delivering personalized experiences for prospect.",
    },
    {
      id: 5,
      title: "Difficulty maintaining quality conversations across time zones.",
    },
    {
      id: 6,
      title: "Struggling to scale without skyrocketing costs.",
    },
  ];
  const Aicontent = [
    {
      id: 1,
      title: "Save Time, Boost Sales by 70%",
      para: "With our 100% Done-For-You solution, we handle everything from setup to customization, so you can focus on growing your business.",
    },
    {
      id: 2,
      title: "Always Evolving",
      para: "Our self-learning AI adapts to new technologies, keeping your business ahead of the curve without the need for constant upgrades",
    },
    {
      id: 1,
      title: "Secure & Scalable",
      para: "Bank-level encryption ensures your data stays safe, while our scalable platform grows with your business.",
    },
  ];
  const Accordianapi = [
    {
      id: 1,
      accordianid: "headingOne",
      collapseid: "collapseOne",
      datatargetid: "#collapseOne",
      title: "How Can Our AI Voice Calling Assistant Benefit My Business?",
      value: true,
      show: "show",
      heading:
        "Our AI Voice Calling Assistant offers a multitude of benefits to businesses of all sizes:",
      ulitems: [
        {
          liItems:
            "Enhanced Efficiency: Automate routine tasks, such as lead generation, customer follow-ups, and appointment scheduling, freeing up your team to focus on strategic initiatives.",
        },
        {
          liItems:
            "Increased Productivity: Handle a higher volume of calls simultaneously, maximizing your team's efficiency.",
        },
        {
          liItems:
            "Improved Customer Experience: Deliver consistent, personalized interactions, leading to higher customer satisfaction and loyalty.",
        },
        {
          liItems:
            "Cost Reduction: Lower operational costs by reducing the need for human agents and minimizing human error.",
        },
        {
          liItems:
            "Data-Driven Insights: Gain valuable insights into customer behavior and preferences, enabling data-driven decision-making.",
        },
        {
          liItems:
            "Scalability: Easily scale your operations to meet fluctuating demand without additional staffing.",
        },
      ],
    },
    {
      id: 2,
      accordianid: "headingTwo",
      collapseid: "collapseTwo",
      title: "How Does Our AI Voice Calling Assistant Work?",
      datatargetid: "#collapseTwo",
      value: false,
      heading:
        "Our AI Voice Calling Assistant leverages advanced AI and NLP technologies to simulate human-like conversations. Here's a simplified breakdown:",
      ulitems: [
        {
          liItems:
            "Text-to-Speech Conversion: The AI converts written scripts into natural-sounding speech.",
        },
        {
          liItems:
            "Speech Recognition: The system accurately recognizes and interprets spoken language, understanding intent and context.",
        },
        {
          liItems:
            "Natural Language Processing: The AI analyzes the conversation, identifies keywords, and generates appropriate responses.",
        },
        {
          liItems:
            "Real-time Response: The system processes information and responds in real-time, maintaining a fluid conversation.",
        },
      ],
   },
    {
      id: 3,
      accordianid: "headingThree",
      collapseid: "collapseThree",
      title: "Is Our AI Voice Calling Assistant Easy to Use?",
      datatargetid: "#collapseThree",
      value: false,
      heading:
        "Yes, our AI Voice Calling Assistant is designed to be user-friendly and easy to implement:",
      ulitems: [
        {
          liItems:
            "Intuitive Interface: Our user-friendly interface allows you to easily train and manage your AI agents.",
        },
        {
          liItems:
            "Pre-built Templates: Utilize our pre-built templates to quickly create and deploy effective call scripts.",
        },
        {
          liItems:
            "Customizable AI Agents: Tailor your AI agents to match your brand voice and messaging.",
        },
        {
          liItems:
            "Real-time Monitoring: Track AI performance and identify areas for improvement.",
        },
        {
          liItems:
            "Expert Support: Our dedicated support team is available to assist you with any questions or issues.",
        },
      ],
    },
    {
      id: 4,
      accordianid: "headingFour",
      collapseid: "collapseFour",
      title: "How Secure is Our AI Voice Calling Assistant?",
      datatargetid: "#collapseFour",
      value: false,
      heading:
        "We prioritize the security of your data and customer interactions. Our AI Voice Calling Assistant employs robust security measures:",
      ulitems: [
        {
          liItems:
            "Data Encryption: Sensitive customer data is encrypted to prevent unauthorized access.",
        },
        {
          liItems:
            "Secure Cloud Infrastructure: Our platform is hosted on highly secure cloud infrastructure.",
        },
      ],
    },
  ];
  const IndustriesApi1 = [
    {
      id: 1,
      heading: "Real Estate",
      title1: "Automated Property Tours:",
      itle2: "Lead Qualification and Follow-Up: ",
      para1:
        "AI can guide potential buyers through virtual property tours, answering questions and providing detailed information.",
      para2:
        "AI can efficiently qualify leads, schedule appointments, and follow up with interested parties.",
      icon: "/assets/landingimage/vectors/Vector1.png",
      layout: true,
    },
    {
      id: 2,
      heading: "Financial Services",
      title1: "Customer Support and Inquiries:",
      title2: "Fraud Detection and Prevention:",
      para1:
        "AI can handle a wide range of customer inquiries, from account balances to loan applications.",
      para2:
        "AI can analyze voice patterns and detect potential fraudulent activity in real-time.",
      icon: "/assets/landingimage/vectors/Vector2.png",
      layout: true,
    },
    {
      id: 3,
      heading: "Healthcare",
      title1: "Patient Appointment Scheduling:",
      title2: "Telehealth Consultations:",
      para1:
        "AI can automate appointment scheduling, reminders, and confirmations.",
      para2:
        "AI can facilitate remote consultations, answering patient queries and providing basic medical advice.",
      icon: "/assets/landingimage/vectors/vector3.png",
      layout: true,
    },
  ];
  const IndustriesApi2 = [
    {
      id: 4,
      heading: "E-commerce",
      title1: "Customer Service and Support:",
      title2: "Sales and Upselling:",
      para1:
        "AI-powered chatbots can assist customers with product information, order tracking, and returns.",
      para2:
        "AI can proactively reach out to customers, offer personalized recommendations, and upsell products.",
      icon: "/assets/landingimage/vectors/Vector4.png",
      layout: true,
    },
    {
      id: 5,
      heading: "Education",
      title1: "Student Support and Advising:",
      title2: "Online Tutoring:",
      para1:
        "AI can provide students with academic advice, answer questions, and offer guidance on course selection.",
      para2:
        "AI-powered tutoring systems can offer personalized learning experiences, adapting to each student's needs.",
      icon: "/assets/landingimage/vectors/Vector5.png",
      layout: true,
    },
    {
      id: 6,
      heading: "Telecommunications",
      title1: "Customer Onboarding and Support:",
      title2: "Sales and Upselling:",
      para1:
        "AI can guide customers through the onboarding process, troubleshoot issues, and provide technical support.",
      para2:
        "AI can identify upselling opportunities and offer tailored packages to customers.",
      icon: "/assets/landingimage/vectors/Vector6.png",
      layout: true,
    },
  ];
  const SliderData = [
    {
      id: 1,
      clientName: "Jim Thiel",
      country: "Mortage Advisor",
      img: '/assets/images/landing/ai_talk_assist/JimThiel .png',
      testimonial:
        "Best of the best that about sums up my experience.",
    },
    {
      id: 2,
      clientName: "Toby Woods",
      country: "NorthStar Systems, LLC",
      img: '/assets/images/landing/ai_talk_assist/TobyWoods.png',
      testimonial:
        "There commitment to helping clients incorporate AI and stay updated with the latest technologies is evident. Working with them has been both fun and rewarding, saving me time and money. I highly recommend Fourth Industrial Revolution to any buisness looking to enhance its digital presence and operational efficiency.",
    },
    {
      id: 3,
      clientName: "Carol Huston",
      country: "True Story Realty",
      img: "/assets/images/landing/ai_talk_assist/CarolHuston.png",
      testimonial:
        "While many people are intimidated by AI, Barry has a way of making it practical and approachable. He's taen the mystery -- and the fear--out of it, showing us how AI can be a powerful tool in our arsenal. Thanks to Barry, we now see AI as a game-changer that frees up our time so we can focus on what truly matters--our clients",
    },
    {
      id: 4,
      clientName: "KaiB",
      country: "True Story Realty",
      img: "/assets/landingimage/Ellipse 204.png",
      testimonial:
        "4IR has completely transformed the way we approach our business operations. The platform's self-learning capabilities ensure we’re always using the latest",
    },

  ];
  const WhyChooseAI = [
    {
      id: 1,
      title: "Seamless AI-to-AI Handoffs",
      description: "Handle more calls efficiently without interruptions.",
    },
    {
      id: 2,
      title: "Tailored for Your Industry",
      description:
        "Leverage pre-trained agents customized to fit your specific business needs.",
    },
    {
      id: 3,
      title: "Lightning-Fast Deployment",
      description:
        "Get up and running within 48 hours, no long wait times required",
    },
    {
      id: 4,
      title: "Enterprise-Grade Security",
      description:
        "Safeguard sensitive data with top-tier encryption and compliance standards.",
    },
    {
      id: 5,
      title: "Self-Learning AI",
      description:
        "Enjoy smarter, more effective interactions that continually improve over time",
    },
    {
      id: 6,
      title: "100% Done-For-You Setup",
      description:
        "Focus on growing your business while we handle the technical setup for a smooth launch.",
    },
  ];
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setAudio(new Audio("/assets/landingimage/heather-audio.wav"));
    }
  }, []);

  const handlePlayPause = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleOpenModal = () => {
    setShowModal(!showModal);
  };
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };
  return (
    <>

      {/* testing */}
      <Head>
        <title>4IR - AI Talk Assist</title>
      </Head>

      {/* <Layout> */}
        {showModal && <Model close={handleOpenModal} margin='100px' />}
        <TawkToIntegration />
        <section>
          <div className="main-wrapper">
            <div className="container-fluid">
              <div class="main-banner">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 colum1">
                    <div className="figure">
                      <SiteLogo width={"66%"} height={"fit-content"} />
                    </div>
                    <H1
                      title="Supercharge Your Sales Teams With "
                      breakpoint={true}
                      spanTitle="AI-Driven Solutions."
                    />
                    <Para
                      title="Say goodbye to the stress of sales teams and hello to human-like AI that works 24/7."
                      className="bannerpara"
                    />
                    <div className="my-4 bannerSpandiv d-flex justify-content-start gap-5">
                      <span className="bannerSpan">
                        <FiCheck className="primary" /> No complex Software
                      </span>
                      <span className="bannerSpan">
                        <FiCheck className="primary" /> Easy-integration
                      </span>
                      <span className="bannerSpan">
                        <FiCheck className="primary" /> 24/7 Availability
                      </span>
                    </div>
                    <div className="banner-btn">
                      <button href="#" className="btn-1" onClick={handleOpenModal}>
                        Book a free Demo
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-end align-items-center customScreen">
                    <div className="figure2 mt-5">
                      <YoutubeVideo src={"https://www.youtube.com/embed/tgbNymZ7vqY"} width="100%" height="100%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="second2-wrapper">
            <div className="container">
              <div class="second-session">
                <div className="row">
                  <div className="section2heading d-flex justify-content-center">
                    <H5
                      title="Sales can be tough — especially when you're juggling a mountain of leads, customer expectations, and an ever-changing market. If you're feeling the pressure, you're not alone. Many businesses face challenges that slow down growth and drain resources."
                      className="text-capitalize text-center section2h5"
                    />
                  </div>
                </div>
                <div className="row section2center">
                  <SecondSecBox SecondBox={SecondBox} />
                </div>
                <div className="section2bottom">
                  <H6
                    title="Are these common sales challenges holding your business back?"
                    className="section2h6"
                  />
                  <button className="btn-1" onClick={handleOpenModal}>Its Time To Make A Change</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section3-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="section3-span1 text-white text-uppercase text-center">
                    introducing
                  </div>
                  <div className="section3-span1 primary text-uppercase text-center">
                    AI Talk Assist
                  </div>
                  <div className="section3-main  text-center d-flex justify-content-center">
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ width: "100%" }}
                    >
                      <div className="line"></div>
                      <H5
                        title="The Revolutionary Voice AI Platform"
                        className="text-center section3h5 px-3 mb-0"
                      />
                      <div className="line"></div>
                    </div>
                  </div>
                  <Para
                    title="Transform your sales process in just two days—no long wait times, no hassle."
                    className="text-center section3para"
                  />

                  <div className="text-center section3btn">
                    <button className="btn-1" onClick={handleOpenModal}>Get Started with AI</button>
                  </div>
                </div>
              </div>

              <div class="custom-card-section">
                <div className="flex-card d-flex justify-content-center">
                  <Card1 content={Aicontent} layout={false} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section4-wrapper">
            <div className="container-fluid ">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="section4heading text-center">
                    <H1 title="Give It a Listen" className="section4h1" />
                  </div>
                </div>
              </div>

              <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="section4-img d-flex justify-content-center">
                    <div
                      onClick={() => {
                        handlePlayPause();
                        toggleAnimation();
                      }}
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
                          <FaPlay size={100} color="blue" className="ms-2" />
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="div col-lg-12 text-center">
                  <div className="section4bottom">
                    <H4
                      title="The AI landscape is constantly evolving. Outdated technology can hinder your growth."
                      className="section4h4"
                    />
                  </div>
                  <button className="btn-1" onClick={handleOpenModal}>Explore AI Talk Assets Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section5-wrapper">
            <div className="container">
              <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="section5heading">
                    <H1
                      title="How Does 4IR AI Voice Calling"
                      className="section5h1"
                    />
                    <H1 title="Exactly Work?" className="section5h1" />
                  </div>
                  <Para
                    title="Imagine a future where your lead generation process is automated, efficient, and highly effective. 4IR AI Voice Calling makes this a reality. Here's how it works:"
                    className="section5para1"
                  />
                </div>
              </div>

              <div class="fourth-section">
                <div className="row customborder section5-2ndrow">
                  <div className="col-lg-12 col-md-12 col-sm-12 custom-margin">
                    <H3
                      title="1. Lead Capture and CRM Integration"
                      className="section5h3"
                    />
                    <div className="d-flex align-items-center ">
                      <div>
                        <GiSevenPointedStar
                          className="primary me-3"
                          size={23}
                        />
                      </div>
                      <Para
                        title="Your sales or marketing team generates leads, which are then added to your CRM system."
                        className="section5para2"
                      />
                    </div>
                    <div className="d-flex align-items-center">
                      <div>
                        <GiSevenPointedStar
                          className="primary me-3"
                          size={23}
                        />
                      </div>
                      <Para
                        title="4IR AI Voice Calling integrates seamlessly with your CRM, providing real-time access to lead data."
                        className="section5para2"
                      />
                    </div>
                  </div>

                  <div className="col-lg-7 col-md-12 col-sm-12 text-white  CMargin">
                    <div className=" section5-quaters">
                      <Image src={cardsStats} className="cardsStats " alt="image" />
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-12 col-sm-12 text-white">
                    <div className="customborder section5-quaters">
                      <Image src={Productstats} className="Productstats" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="fourth-section">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-6 customborder section5-2ndrow section5-CustomMargin section5-Customwidth">
                    <div className="">
                      <H3
                        title="2. Automated Outbound Calling"
                        className="section5h3"
                      />
                      <div className="d-flex align-items-center ">
                        <div>
                          <GiSevenPointedStar
                            className="primary me-3"
                            size={23}
                          />
                        </div>
                        <Para
                          title="The AI-powered system automatically dials leads, saving you time and resources."
                          className="section5para2"
                        />
                      </div>
                      <div className="d-flex align-items-center ">
                        <div>
                          <GiSevenPointedStar
                            className="primary me-3"
                            size={23}
                          />
                        </div>
                        <Para
                          title="It can handle a large volume of calls simultaneously, ensuring no lead is missed."
                          className="section5para2"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6  customborder section5-2ndrow section5-Customwidth">
                    <div className="">
                      <H3
                        title="3. Intelligent Conversations"
                        className="section5h3"
                      />
                      <div className="d-flex align-items-center ">
                        <div>
                          <GiSevenPointedStar
                            className="primary me-3"
                            size={23}
                          />
                        </div>
                        <Para
                          title="The AI engages in natural, human-like conversations with leads."
                          className="section5para2"
                        />
                      </div>
                      <div className="d-flex align-items-center  ">
                        <div>
                          <GiSevenPointedStar
                            className="primary me-3"
                            size={23}
                          />
                        </div>
                        <Para
                          title="It can ask relevant questions, provide information, and even qualify leads based on predefined criteria."
                          className="section5para2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fourth-section">
                <div class="row">
                  <div className="col-lg-12 col-md-12 customborder section5-2ndrow">
                    <H3
                      title="4. Lead Capture and CRM Integration"
                      className="section5h3"
                    />
                    <div className="d-flex align-items-center ">
                      <div>
                        <GiSevenPointedStar
                          className="primary me-3"
                          size={23}
                        />
                      </div>
                      <Para
                        title="Your sales or marketing team generates leads, which are then added to your CRM system."
                        className="section5para2"
                      />
                    </div>
                    <div className="d-flex align-items-center ">
                      <div>
                        <GiSevenPointedStar
                          className="primary me-3"
                          size={23}
                        />
                      </div>

                      <Para
                        title="4IR AI Voice Calling integrates seamlessly with your CRM, providing real-time access to lead data."
                        className="section5para2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="fourth-section">
                <div className="row text-center section5lastpara">
                  <Para title="By automating these tasks, 4IR AI Voice Calling not only saves you time and money but also improves lead quality and conversion rates. It empowers your team to focus on higher-value activities, such as strategic planning and relationship building." />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section6-wrapper">
            <div className="container">
              <div className="row text-center">
                <div className="section6h1">
                  <H1
                    title="Industries Revolutionized by 4IR AI Voice Calling"
                    className="section5h1"
                  />
                </div>
                <Para
                  title="4IR AI Voice Calling is a versatile tool that can significantly impact various industries. Here are a few key sectors where this technology can be a game-changer:"
                  className="section6para1"
                />
              </div>

              <div className="row">
                <Card1 content={IndustriesApi1} layout={true} />
              </div>

              <div className="row">
                <div className="col-lg-12 MapSectiondiv">
                  <figure>
                    <Image
                      src={MapSection}
                      alt="Map Section"
                      className="MapSection"
                    />
                  </figure>
                </div>
              </div>

              <div className="row">
                <Card1 content={IndustriesApi2} layout={true} />
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="text-white text-center section6lastRow">
                    By automating routine tasks and improving customer
                    interactions, 4IR AI Voice Calling can help businesses in
                    these industries achieve greater efficiency, productivity,
                    and customer satisfaction.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="section7-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                  <h2 className="section7h2">
                    Why Choose<span className="primary"> AI Talk Assist?</span>
                  </h2>
                </div>

                <div className="d-flex justify-content-center flex-wrap align-items-center gap-3 custom-boxes">
                  {WhyChooseAI?.map((items, index) => (
                    <Card3 items={items} key={index} />
                  ))}
                </div>


                <div className="row">
                  <div className="text-center section7-btn">
                    <button className="btn-1" onClick={handleOpenModal}>Get Started with AI</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial">
          <div className="d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center testimonial-heading w-100">
              <div className="line "></div>
              <H6 title="Client Reviews" />
              <div className="line"></div>
            </div>
          </div>

          <H3
            title="Don’t Just Take Our Word for It"
            className="section7h3 customsec7h3 text-center"
          />
          <div className="container">
            <Slider SliderData={SliderData} />
          </div>
        </section>

        <section className="calltoaction">
          <div className="calltoaction-wrapper">
            <div className="container">
              <Calltoaction />
            </div>
          </div>
        </section>

        <section className="asked-question">
          <div className="asked-question-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="frequently-question-content">
                    <H2 title="Frequently Asked Question" />
                    <Para title="Book a Demo if you have any more questions." />
                    <div class="accordion" id="accordionExample">
                      {Accordianapi?.map((items, index) => {
                        return <Accordian items={items} key={index} content={true} />;
                      })}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bookDemo-content">
                    <H2 title="Book a" spanTitle="Demo" breakpoint={true} />
                    <Para title="Ready to see AI Talk Assist in action? Schedule your FREE demo now and discover how it can transform your customer interactions and boost productivity! Pick a time that works best for you below." />
                    <iframe
                      className="calendly-inline-widget"
                      src="https://calendly.com/bkrevoy/60-minute-meeting-for-4ir-consulting?background_color=1a1a1a&text_color=ffffff"
                      style={{ minWidth: "100%", height: "500px" }}
                      loading="lazy"
                    ></iframe>
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
