import React, { useState, useEffect } from "react";
import H5 from "../Typography/H5";
import H6 from "../Typography/H6";
import H3 from "../Typography/H3";
import { FiPlus } from "react-icons/fi";
import { TiMinus } from "react-icons/ti";
// import "../widgets.css";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Accordian = ({ items, content, key }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Ensure the first accordion item is active by default if items.value is true
  useEffect(() => {
    if (items.value) {
      setActiveIndex(items.id);
    }
  }, [items]);

  const handleClick = () => {
    setActiveIndex(activeIndex === items.id ? null : items.id);
  };

  return (
    <div className="accordion-item" key={key || items.id}>
      <h2 className="accordion-header" id={items.accordianid}>
        <button
          className="accordion-button text-white d-flex justify-content-between align-items-center"
          type="button"
          onClick={handleClick}
          aria-expanded={activeIndex === items.id}
          aria-controls={items.collapseid}
        >
          <div className="d-flex justify-content-between align-items-center">
            <H3 title={items.title} />
            {content ? (
              <>{activeIndex === items.id ? <TiMinus /> : <FiPlus />}</>
            ) : (
              <div className="arrow">
                {activeIndex === items.id ? (
                  <MdOutlineKeyboardArrowUp className="downarrow" size={25} />
                ) : (
                  <MdOutlineKeyboardArrowDown size={25} />
                )}
              </div>
            )}
          </div>
        </button>
      </h2>
      <div
        id={items.collapseid}
        className={`accordion-collapse collapse ${
          activeIndex === items.id ? "show" : ""
        }`}
        aria-labelledby={items.accordianid}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <H5 title={items.heading} />
          {content && (
            <>
              <ul style={{ color: "white" }}>
                {items.ulitems?.map((ulitem, ulIndex) => (
                  <li key={`${items.accordianid}-ulitem-${ulIndex}`}>
                    {ulitem.liItems}
                  </li>
                ))}
              </ul>
              <H6 title={items.heading2} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
