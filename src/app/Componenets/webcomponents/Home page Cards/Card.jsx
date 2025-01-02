import React from "react";
import "@/css/widget.css"
import H5 from "../../landing/Typography/H5";
import Para from "../../landing/Typography/Para";
const Card = ({ children, classname, index }) => {
    return(
        <div className={`${classname}`} key={index}>{children}</div>
    )
}
const CardImage=({src, alt,imgfigure,imgclass  })=>{
    return(
        <figure className={`${imgfigure}`}>
            <img src={src} alt={alt} className={imgclass} />
        </figure>
    )
}
const CardBody=({children, cardbody })=>{
    return(
      <div className={cardbody}>
        {children}
      </div>
    )
}
const CardTitle=({title, titleclass})=>{
    return(
        <H5 className={titleclass} title={title} />
    )
}
const CardPara=({para, paraclass})=>{
    return(
        <Para className={paraclass} title={para} />
    )
}
const CardButton=({button, buttonclass, icon})=>{
    return(
        <a className={buttonclass}>{button}{icon}</a>
    )
}
Card.Image = CardImage;
Card.Body= CardBody;
Card.Title = CardTitle;
Card.Para = CardPara;
Card.Button = CardButton;
export default Card;