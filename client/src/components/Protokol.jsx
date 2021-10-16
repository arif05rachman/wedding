import React from "react";
import {
  hands_wash,
  maximum_capacity,
  no_handshake,
  physical_distancing,
  temperature_check,
  wear_masks,
} from "../assets/images/protokol";
const Protokol = ({ language }) => {
  return (
    <div className="w-full px-4 md:w-1/2 grid gap-6 md:text-lg mb-16 mx-auto text-center">
      <p>
        {language === "ID"
          ? `Sebagai upaya memutus mata rantai penularan COVID-19, kami akan menerapkan
        protokol keamanan ini di upacara pernikahan kami`
          : `As an effort to break the chain of COVID-19 transmission, we will apply
        these safety protocol at our wedding ceremony`}
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-24">
        <div className="grid md:gap-2 place-items-center">
          <img
            src={temperature_check}
            alt="TEMPERATURE"
            className="h-24 md:h-32 w-24 md:w-32"
            width="96"
            height="96"
          />
          <p className="text-center">
            {language === "ID" ? "Pengecekan suhu tubuh" : "Temperature Check"}
          </p>
        </div>
        <div className="grid md:gap-2 place-items-center">
          <img
            src={no_handshake}
            alt="HANDSHAKE"
            className="h-24 md:h-32 w-24 md:w-32"
            width="96"
            height="96"
          />
          <p className="text-center">
            {language === "ID" ? "Tidak bersalaman" : "No Handshake"}
          </p>
        </div>
        <div className="grid md:gap-2 place-items-center">
          <img
            src={physical_distancing}
            alt="DISTANCING"
            className="h-24 md:h-32 w-24 md:w-32"
            width="96"
            height="96"
          />
          <p className="text-center">
            {language === "ID" ? "Jaga jarak" : "Physical Distancing"}
          </p>
        </div>
        <div className="grid md:gap-2 place-items-center">
          <img
            src={maximum_capacity}
            alt="CAPACITY"
            className="h-24 md:h-32 w-24 md:w-32"
            width="96"
            height="96"
          />
          <p className="text-center">
            {language === "ID" ? "Pembatasan kapasitas" : "Maximum Capacity"}
          </p>
        </div>
        <div className="grid md:gap-2 place-items-center">
          <img
            src={wear_masks}
            alt="WEAR-MASK"
            className="h-24 md:h-32 w-24 md:w-32"
            width="96"
            height="96"
          />
          <p className="text-center">
            {language === "ID" ? "Memakai masker" : "Wear Masks"}
          </p>
        </div>
        <div className="grid md:gap-2 place-items-center">
          <img
            src={hands_wash}
            alt="WASH"
            className="h-24 md:h-32 w-24 md:w-32"
            width="96"
            height="96"
          />
          <p className="text-center">
            {language === "ID"
              ? "Mencuci tangan secara berkala"
              : "Wash Hands Regularly"}
          </p>
        </div>
      </div>
      <p>
        {language === "ID"
          ? `Semua tamu undangan harus memperhatikan dan mematuhi kesehatan yang berlaku
        protokol`
          : `all guests and invitees should pay attention and obey the applied health
          protocol`}
      </p>
    </div>
  );
};

export default Protokol;
