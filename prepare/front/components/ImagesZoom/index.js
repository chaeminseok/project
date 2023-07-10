import Slick from "react-slick";
import PropTypes from "prop-types";
const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div>
      <header>
        <h1>상세 이미지</h1>
        <button onClick={onClose}>X</button>
      </header>
      <div>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <div key={v.src}>
                <img src={v.src} alt={v.src} />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </div>
  );
};
ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(propTypes.objecy).isRequired,
  onClose: PropTypes.func.isRequired,
};
export default ImagesZoom;
