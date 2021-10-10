import React from "react";
import dayjs from "dayjs";
import wishesPaper from "../assets/images/wishesPaper.jpg";
var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Carousel = ({ wishes }) => {
  // We will start by storing the index of the current image in the state.
  const [currentImage, setCurrentImage] = React.useState(0);

  // We are using react ref to 'tag' each of the images. Below will create an array of
  // objects with numbered keys. We will use those numbers (i) later to access a ref of a
  // specific image in this array.
  const refs = wishes?.reduce((acc, val, i) => {
    acc[i] = React.createRef();
    return acc;
  }, {});

  const scrollToImage = (i) => {
    // First let's set the index of the image we want to see next
    setCurrentImage(i);
    // Now, this is where the magic happens. We 'tagged' each one of the images with a ref,
    // we can then use built-in scrollIntoView API to do eaxactly what it says on the box - scroll it into
    // your current view! To do so we pass an index of the image, which is then use to identify our current
    // image's ref in 'refs' array above.
    refs[i].current.scrollIntoView({
      //     Defines the transition animation.
      behavior: "smooth",
      //      Defines vertical alignment.
      block: "nearest",
      //      Defines horizontal alignment.
      inline: "start",
    });
  };

  // Some validation for checking the array length could be added if needed
  const totalImages = wishes?.length;

  // Below functions will assure that after last image we'll scroll back to the start,
  // or another way round - first to last in previousImage method.
  const nextImage = () => {
    if (currentImage >= totalImages - 1) {
      scrollToImage(0);
    } else {
      scrollToImage(currentImage + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      scrollToImage(totalImages - 1);
    } else {
      scrollToImage(currentImage - 1);
    }
  };

  // Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
  const arrowStyle =
    "absolute text-white text-2xl z-10 bg-yellow-600 h-10 w-10 rounded-full opacity-30 flex items-center justify-center hover:opacity-75 focus:opacity-75 focus:ring-yellow-600";

  // Let's create dynamic buttons. It can be either left or right. Using
  // isLeft boolean we can determine which side we'll be rendering our button
  // as well as change its position and content.
  const sliderControl = (isLeft) => (
    <button
      type="button"
      onClick={isLeft ? previousImage : nextImage}
      className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
      style={{ top: "40%" }}
    >
      <span role="img" aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
        {isLeft ? "◀" : "▶"}
      </span>
    </button>
  );
  return (
    <div className="px-3 flex justify-center w-screen items-center">
      <div className="relative w-full">
        {sliderControl()}
        <div className="carousel w-full">
          {sliderControl(true)}
          {wishes?.map((value, i) => (
            <div
              className="w-full flex-shrink-0 text-center sm:py-7 sm:px-16 md:py-8 md:px-16 lg:py-10 lg:px-20 xl:py-12 xl:px-24 2xl:py-14 2xl:px-64 font-alef relative flex flex-col justify-between"
              key={i}
              ref={refs[i]}
              style={{
                backgroundImage: `url(${wishesPaper})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "20rem",
              }}
            >
              <p className="text-xl">{value?.post}</p>
              <div className="w-full flex flex-col justify-center text-center">
                <p className="font-Sacramento text-1.875xl">
                  - {value?.name} -
                </p>
                <p>{dayjs(value?.createdAt).fromNow()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
