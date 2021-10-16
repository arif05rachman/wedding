import React from "react";

const Footer = ({language}) => {
  return (
    <footer
      className="
      p-8
      md:p-12
      md:pb-8
      grid
      gap-2
      bg-linen
      font-cormorant-sc
      place-items-center
      bg-yellow-100
    "
    >
      <div
        className="
        grid grid-flow-col
        gap-1
        auto-cols-max
        items-center
        justify-center
        mb-16
      "
      >
        <span>{language === "ID" ? "Foto oleh" : "Photos by"}</span>
        <a
          className="transform hover:scale-105 font-bold hover:text-yellow-500 transition-all"
          href="https://www.instagram.com/screenshotfoto/"
          target="_blank"
          rel="noreferrer"
        >
          screenshotfoto
        </a>
      </div>
      <p className="text-gray-400">arif05rachman © 2021</p>
    </footer>
  );
};

export default Footer;
