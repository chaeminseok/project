const ImagesZoom = ({ images, onClose }) => {};
ImagesZoom.propTypes = {
  images: propTypes.arrayOf(propTypes.objecy).isRequired,
  onClose: propTypes.func.isRequired,
};
export default ImagesZoom;
