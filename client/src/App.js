import { useState, useEffect } from "react";
import {
  Countdown,
  Navbar,
  Slider,
  Wedding,
  Wishes,
  Gallery,
} from "./components";

const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <Navbar />
      <Countdown />
      <Slider />
      <Wedding />
      <Gallery />
      <Wishes />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
    </div>
  );
};

export default App;
