import propTypes from "prop-types";
import React, { useState, useCallback } from "react";
import { PlusOutlined } from "@ant-design/icons";
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
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
      </>
    );
  } else if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ display: "inline-block", width: "50%" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ display: "inline-block", width: "50%" }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        ;
      </>
    );
  }

  return (
    <div>
      <img
        role="presentation"
        src={images[0].src}
        alt={images[0].src}
        onClick={onZoom}
        width="50%"
      />
      <div
        role="presentation"
        style={{
          display: "inline-block",
          width: "50%",
          textAlign: "center",
          verticalAlign: "middle",
        }}
        onClick={onZoom}
      >
        <PlusOutlined />
        <br />
        {images.length - 1}
        개의 사진 더보기
      </div>
    </div>
  );
};

PostImages.propTypes = {
  images: propTypes.arrayOf(propTypes.object),
};
export default PostImages;
