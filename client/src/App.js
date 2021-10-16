import { useState, useEffect } from "react";
import {
  Countdown,
  Navbar,
  Slider,
  Wedding,
  Wishes,
  Gallery,
  Protokol,
  Footer,
} from "./components";
import Sound from "./assets/audio/sound.mp3";
import { FadeInSection } from "./components";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

const App = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);
  const [language, setLanguage] = useState("ID");

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

  const changeLaguage = (e) => {
    const lang = e.target.id;
    setLanguage(lang);
  };

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
      <Navbar language={language} changeLaguage={changeLaguage} />

      <FadeInSection>
        <Countdown language={language} />
      </FadeInSection>
      <FadeInSection>
        <Slider language={language} />
      </FadeInSection>
      <FadeInSection>
        <Wedding language={language} />
      </FadeInSection>
      <FadeInSection>
        <Protokol language={language} />
      </FadeInSection>
      <FadeInSection>
        <Gallery language={language} />
      </FadeInSection>
      <FadeInSection>
        <Wishes language={language} />
      </FadeInSection>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="back-to-top bg-gold text-white font-bold uppercase transform hover:scale-105 transition-all hover:bg-yellow-500"
        >
          &#8679;
        </button>
      )}
      <Footer language={language} />
    </div>
  );
};

export default App;
