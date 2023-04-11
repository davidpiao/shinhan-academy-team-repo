/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../images/partner_1.png";
import banner2 from "../images/partner_2.png";
import banner3 from "../images/partner_3.png";
import banner4 from "../images/partner_4.png";
import banner5 from "../images/partner_5.png";
import "../styles/BottomBanner.css";

class BottomBanner extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 10,
      cssEase: "linear",
    };
    return (
      <div className="mainContainer">
        <Slider {...settings}>
          <div className="containers">
            <img src={banner1} />
          </div>
          <div className="containers">
            <img src={banner2} />
          </div>
          <div className="containers">
            <img src={banner3} />
          </div>
          <div className="containers">
            <img src={banner4} />
          </div>
          <div className="containers">
            <img src={banner5} />
          </div>
        </Slider>
      </div>
    );
  }
}

export default BottomBanner;
