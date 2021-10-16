import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { gift, arif_bca, putri_bca, arif_gopay } from "../assets/images/gifts";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Carousel = ({ wishes, language }) => {
  const [state, setState] = useState({ windowWidth: window.innerWidth });
  const [showModal, setShowModal] = useState(false);

  const handleResize = (e) => {
    setState({ windowWidth: window.innerWidth });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Swiper
        navigation={state?.windowWidth >= 640 ? true : false}
        modules={[EffectFade]}
        effect="fade"
        spaceBetween={50}
        slidesPerView={1}
      >
        {wishes &&
          wishes.map((wish) => {
            return (
              <SwiperSlide key={wish?._id} className=" w-full py-5 px-10">
                <div className="bg-wishes min-h-full rounded-lg tex text-center py-5 px-10 sm:py-7 sm:px-16 md:py-8 md:px-16 lg:py-10 lg:px-20 xl:py-12 xl:px-24 2xl:py-14 2xl:px-64 font-alef relative flex flex-col justify-between">
                  <p>{wish?.post}</p>
                  <p className="font-Sacramento text-1.875xl mt-5">
                    - {wish?.name} -
                  </p>
                  <p>{dayjs(wish?.createdAt).fromNow()}</p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <div
        className="
          md:w-1/3
          px-4
          grid
          gap-6
          md:text-lg
          place-items-center
          mt-48
          mb-16
          mx-auto
        "
      >
        <img src={gift} alt="GIFT" className="h-32 w-32" />
        <p className="text-center">
          {language === "ID"
            ? `Kami juga menerima niat baik dalam bentuk apapun. Jika Anda ingin mengirimkan hadiah kepada kami`
            : `We also accept good intention in any form. Should you wish to send us
          gifts`}
        </p>
        <div className="w-full grid sm:block text-center">
          <button
            onClick={() => setShowModal(true)}
            className="py-2 px-4 bg-gold text-white font-bold uppercase transform hover:scale-105 transition-all"
          >
            {language === "ID" ? "Lihat" : "Show me"}
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center overflow-x-hidden overflow-y-visible fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className=" text-center p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h2 className="text-3xl font-semibold font-alef">
                        Gifts
                      </h2>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-16 pt-10">
                      <div className="grid gap-4 place-items-center p-4 pt-2">
                        <p
                          className="font-bold"
                          style={{ color: "rgb(0, 95, 175)" }}
                        >
                          BCA
                        </p>
                        <div className="grid place-items-center py-2">
                          <p>ARIF RACHMAN HUSEN</p>
                          <img
                            src={arif_bca}
                            alt="BCA"
                            className="w-56"
                            width="360"
                            height="360"
                          />
                          <p className="font-bold text-base relative font-cormorant-infant">
                            2180375450
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-4 place-items-center p-4 pt-2">
                        <p
                          className="font-bold"
                          style={{ color: "rgb(0, 95, 175)" }}
                        >
                          BCA
                        </p>
                        <div className="grid place-items-center py-2">
                          <p>PUTRI FATIMAH AZZAHRA</p>
                          <img
                            src={putri_bca}
                            alt="BCA"
                            className="w-56"
                            width="360"
                            height="360"
                          />
                          <p className="font-bold text-base relative font-cormorant-infant">
                            2080321450
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-4 place-items-center p-4 pt-2">
                        <p className="font-bold text-green-500">Gopay</p>
                        <div className="grid place-items-center py-2">
                          <p>ARIF RACHMAN HUSEN</p>
                          <img
                            src={arif_gopay}
                            alt="Gopay"
                            className="w-56"
                            width="360"
                            height="360"
                          />
                          <p className="font-bold text-base relative font-cormorant-infant">
                            085222696058
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="py-2 px-4 bg-gold text-white font-bold uppercase transform hover:scale-105 transition-all rounded"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        {language === "ID" ? "Tutup" : "Close"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
