import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const buttonStyle = {
  width: "15px",
  background: "none",
  border: "0px",
};

const properties = {
  prevArrow: (
    <button style={{ ...buttonStyle, left: "-40px" }}>
      <svg
        width="14"
        height="19"
        viewBox="0 0 14 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8333 2L2.22233 8.09929C1.63173 8.4741 1.59856 9.32392 2.15816 9.74362L11.8333 17"
          stroke="#1E1E1E"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle, right: "-40px" }}>
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2L13.4651 8.06327C14.1464 8.42359 14.1812 9.38676 13.5276 9.79526L2 17"
          stroke="#1E1E1E"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </button>
  ),
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 2,
      },
    },
  ],
};

const Carrousel = ({ images, config = {}, left = false }) => {
  return (
    <div className={`${left ? "slide-left" : ""} w-full bg-transparent  h-[100px]  px-20`}>
      <Slide {...{ ...properties, ...config }}>
        {images.map(({ src, name }) => (
          <div
            className="each-slide-effect flex justify-center min-w-[140px] h-[100px] items-center"
            key={name}
          >
            <img src={src} alt={name} className="w-auto h-[130px] " />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carrousel;
