import React from 'react'
import Para from "../Typography/Para";
import { FaCircle } from "react-icons/fa";
// import "../widgets.css"

const SecondSecBox = ({ SecondBox, className }) => {
  return (
    <>
      {SecondBox?.map((items) => {
        return (
          <div
            className={`col-lg-6 col-md-12 col-sm-6 SecondSecBoxCol`}
            key={items.id}
          >
            <div className="SecondSecBox customborder">
              <div className="SecondSecBox-content d-flex align-items-center ">
                <div className="circle">
                  <FaCircle color="#5b151b" size={25} />
                </div>
                <Para title={items.title} className="SecondSecBoxPara" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default SecondSecBox
