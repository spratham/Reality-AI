import React from "react";
import "./Page8Card.css";
const Page8Card = (props) => {
  return (
    <div className="card-wrapper8">
      <div className="image">{props.picture}</div>
      <div className="name">
        <center>{props.name}</center>
      </div>
      <div className="l2">
        <center>Designation</center>
      </div>
      <div className="designation">
        <center>{props.designation}</center>
      </div>
      <div className="quote">
      <center>{props.quote}</center>
      </div>
      <div className="paragraph">
        <>{props.p}</>
      </div>
    </div>
  );
};

export default Page8Card;
