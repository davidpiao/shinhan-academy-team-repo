/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/Image.css";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

const Image = () => {
  return (
    <div className="images">
      <div className="section">
        <img src={image1} />
      </div>
      <div className="section">
        <img src={image2} />
      </div>
      <div className="section">
        <img src={image3} />
      </div>
      <div className="section">
        <img src={image1} />
      </div>
      <div className="section">
        <img src={image3} />
      </div>
      <div className="section">
        <img src={image2} />
      </div>
    </div>
  );
};

export default Image;
