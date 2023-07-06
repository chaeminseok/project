import propTypes from "prop-types";
import React, { useState } from "react";
const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  if (images.length === 1) {
    return (
      <>
        <img src={images[0].src} alt={images[0].src} onClick={onZoom} />
      </>
    );
  }

  return <div></div>;
};

PostImages.propTypes = {
  images: propTypes.arrayOf(propTypes.object),
};
export default PostImages;
