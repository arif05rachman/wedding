import { useEffect, useState } from "react";
import dayjs from "dayjs";

const Countdown = ({ language }) => {
  const calculateTimeLeft = () => {
    const weddingDate = dayjs("2021-10-23T08:00:00+07:00");
    const difference = weddingDate.diff(dayjs());
    let timeLeft = {};

    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const addZeroPrefix = (num) => {
    var s = num + "";
    while (s.length < 2) s = "0" + s;
    return s;
  };

  return (
    <div>
      <section className="motif-transparent">
        <section
          className="
            py-8
            sm:py-20
            md:py-44
            xl:py-52
            grid grid-flow-col
            auto-rows-max auto-cols-max
            gap-4
            md:gap-16
            justify-center
            px-16
            grad-trans-linen-trans
          "
        >
          <div className="bg-black rounded-md shadow-lg bg-opacity-70 p-2 sm:p-3 sm:py-5 md:py-10 text-yellow-400 w-12 sm:w-20 md:w-28 transition-all text-center">
            <p className="font-alef text-lg sm:text-3xl md:text-5xl">
              {addZeroPrefix(timeLeft.days && 0)}
            </p>
            <p className="font-alef text-2xs sm:text-xs md:text-base">
              {language === "ID" ? "HARI" : "DAYS"}
            </p>
          </div>
          <div className="bg-black rounded-md shadow-lg bg-opacity-70 p-2 sm:p-3 sm:py-5 md:py-10 text-yellow-400 w-12 sm:w-20 md:w-28 transition-all text-center">
            <p className="font-alef text-lg sm:text-3xl md:text-5xl">
              {addZeroPrefix(timeLeft.hours && 0)}
            </p>
            <p className="font-alef text-2xs sm:text-xs md:text-base">
              {language === "ID" ? "JAM" : "HOURS"}
            </p>
          </div>
          <div className="bg-black rounded-md shadow-lg bg-opacity-70 p-2 sm:p-3 sm:py-5 md:py-10 text-yellow-400 w-12 sm:w-20 md:w-28 transition-all text-center">
            <p className="font-alef text-lg sm:text-3xl md:text-5xl">
              {addZeroPrefix(timeLeft.minutes && 0)}
            </p>
            <p className="font-alef text-2xs sm:text-xs md:text-base">
              {language === "ID" ? "MENIT" : "MINUTES"}
            </p>
          </div>
          <div className="bg-black rounded-md shadow-lg bg-opacity-70 p-2 sm:p-3 sm:py-5 md:py-10 text-yellow-400 w-12 sm:w-20 md:w-28 transition-all text-center">
            <p className="font-alef text-lg sm:text-3xl md:text-5xl">
              {addZeroPrefix(timeLeft.seconds && 0)}
            </p>
            <p className="font-alef text-2xs sm:text-xs md:text-base">
              {language === "ID" ? "DETIK" : "SECONDS"}
            </p>
          </div>
        </section>
      </section>
      <section className="justify-center py-1 md:py-8 text-black grid gap-2">
        <p className="text-center font-bold sm:text-sm md:text-base xl:text-lg text-xs">
          {language === "ID"
            ? "SAMPAI PERNIKAHAN DARI"
            : "UNTIL THE WEDDING OF"}
        </p>
        <p className="font-Sacramento sm:text-5xl md:text-6xl xl:text-7xl text-3xl">
          Putri & Arif
        </p>
      </section>
    </div>
  );
};

export default Countdown;
