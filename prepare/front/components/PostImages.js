import propTypes from "prop-types";
import React, { useState, useCallback } from "react";
const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  });
  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        }
        <img
          role="presentation"
          width="50%"
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
      </>
    );
  

  return (
    <div>
      <img
        role="presentation"
        width="50%"
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
      />
    </div>
  );
};

PostImages.propTypes = {
  images: propTypes.arrayOf(propTypes.object),
};
export default PostImages;
