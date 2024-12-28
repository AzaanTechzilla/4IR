import React from "react";
import H5 from "../Typography/H5";
import Para from "../Typography/Para";
// import "../widgets.css";

const Card1 = ({ content, layout }) => {
  return (
    <>
      {layout ? (
        <>
          {content?.map((items, index) => {
            return (
              <div className="col-lg-4" key={`layout-card-${index}`}>
                <div className="main-body position-relative">
                  <div className="position-absolute card-img d-flex justify-content-center align-items-center">
                    <figure>
                      <img
                        src={items.icon}
                        alt={items.heading}
                        width={200}
                        className="card-inner-img"
                      />
                    </figure>
                  </div>
                  <h5 className="card-h5">{items.heading}</h5>
                  <div className="card-div">
                    <Para
                      title={items.title1}
                      className="text-white card-para1"
                    />
                    <Para title={items.para1} className="card-para2" />
                  </div>
                  <div>
                    <Para
                      title={items.title2} // Assuming this was meant to be unique
                      className="text-white card-para1"
                    />
                    <Para title={items.para2} className="card-para2" />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          {content?.map((item, index) => {
            return (
              <div className="card1" key={`simple-card-${index}`}>
                <div>
                  <H5 title={item.title} className="card1h5" />
                  <Para title={item.para} />
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default Card1;
