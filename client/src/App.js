import { useState, useEffect } from "react";
import {
  Countdown,
  Navbar,
  Slider,
  Wedding,
  Wishes,
  Gallery,
  Protokol,
  Footer
} from "./components";
import Sound from "./assets/audio/sound.mp3";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

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

  const [playing, toggle] = useAudio(Sound);

  return (
    <div>
      <div className="music" onClick={toggle}>
        {!playing ? (
          <img
            src="https://img.icons8.com/ios-filled/50/000000/mute--v1.png"
            alt="mute"
            width="32rem"
          />
        ) : (
          <img
            src="https://img.icons8.com/ios-filled/50/000000/room-sound.png"
            alt="sound"
            width="32rem"
          />
        )}
      </div>
      <Navbar />
      <Countdown />
      <Slider />
      <Wedding />
      <Protokol />
      <Gallery />
      <Wishes />
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          &#8679;
        </button>
      )}
      <Footer />
    </div>
  );
};

export default App;
