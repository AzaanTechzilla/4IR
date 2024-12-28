import React from "react";

const Card = ({ items, index }) => {
  return (
    <div className="card p-2" key={index}>
      <div class="card-body">
        <div className="img-card">
          <img src={items?.img} alt={items.title} />
        </div>
        <div className="lower-content">
          <h5>{items?.title}</h5>
          <p>{items?.para}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
