import React, { useState, useEffect } from 'react';

const Card3 = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {   
        setIsSmallScreen(window.innerWidth <= 576); // Show button only on screens 576px or less
    };
    console.log(window.innerWidth, "width");

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  console.log(isSmallScreen, 'isSmallScreen');

  return (
    <div className={`card3 customborder ${items.className}`}>
      <div className="card3-body">
        <h5 className="car3-h5">{items.title}</h5>
        <p>
          {/* If expanded or on a small screen, show full description; otherwise slice it */}
          {isExpanded || !isSmallScreen
            ? items.description
            : `${items.description.slice(0, 30)}...`}
             {isSmallScreen && (
              <span>

          <button className={`read-more-btn ${isExpanded ? 'text-black': 'text-primary'}`} onClick={toggleReadMore}>
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
              </span>
        )}
        </p>
      
      </div>
    </div>
  );
};

export default Card3;
