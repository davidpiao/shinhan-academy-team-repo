import React, { useState } from "react";
import "../styles/Body.css";
import ImageCarousel from "./ImageCarousel";
import Image from "./Image";
import Board from "./Board";
import Video from "./Video";
import Photo from "./Photo";
import Gallery from "react-photo-gallery";

import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";
import { photos } from "./photos";

const SortablePhoto = SortableElement((item) => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));
const Body = () => {
  const [items, setItems] = useState(photos);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  return (
    <div className="body">
      <div className="topbanner">
        <ImageCarousel />
      </div>
      {/* <div className="info">
        <h3>신한DS의 다양한 소식을 확인해보세요.</h3>
      </div> */}
      <div className="images">
        <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
      </div>
      <div className="container">
        <div className="board">
          <Board />
        </div>
        <Video />
      </div>
    </div>
  );
};

export default Body;
