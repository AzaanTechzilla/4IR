import "@/css/home.css"
import Image from "next/image";
import Robot from "../../public/assets/images/landing/robot.png";
import H1 from "./Componenets/landing/Typography/H1";
import Logo from "../../public/assets/images/4IRonlyLogo.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import "@/css/home.css";
import background from "../../public/assets/images/landing/RoundBlue.gif"
export default function Home() {
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
    </>
  );
}
