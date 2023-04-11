/* eslint-disable jsx-a11y/alt-text */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/carousel-img-1.jpg";
import img2 from "../images/carousel-img-2.jpg";
import img3 from "../images/carousel-img-3.jpg";
import img4 from "../images/carousel-img-4.jpg";
import img5 from "../images/carousel-img-5.jpg";
import "../styles/ImageCarousel.css";

function ImageCarousel() {
  return (
    <>
      <Carousel
        className="main-slide"
        infiniteLoop
        centerMode
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
        <div>
          <img src={img5} />
        </div>
      </Carousel>
    </>
  );
}

export default ImageCarousel;
