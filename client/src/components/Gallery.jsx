import React from "react";
import {
  Gallery01,
  Gallery02,
  Gallery03,
  Gallery04,
  Gallery05,
  Gallery06,
  Gallery07,
  Gallery08,
  Gallery09,
  Gallery10,
  Gallery11,
  Gallery12,
  Gallery13,
  Gallery14,
  Gallery15,
  Gallery16,
  Gallery17,
  Gallery18,
  Gallery19,
  Gallery20,
  Gallery21,
} from "../assets/images/gallery";

const Gallery = () => {
  return (
    <div id="gallery">
      <h2 className="text-center md:text-lg sm:text-xs lg:text-3xl antialiased sm:subpixel-antialiased md:antialiased font-semibold">
        Gallery
      </h2>
      <div className="container mx-auto px-4">
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="hidden md:block md:w-1/2 px-4">
              <div
                className="h-full w-full bg-cover rounded shadow-md"
                style={{
                  backgroundImage: `url(${Gallery01})`,
                }}
              ></div>
            </div>
            <div className="md:w-1/2 h-auto px-4">
              <div className="mb-8">
                <img className="rounded shadow-md" src={Gallery18} alt="" />
              </div>
              <div>
                <img className="rounded shadow-md" src={Gallery04} alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img className="rounded shadow-md" src={Gallery03} alt="" />
            </div>
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img className="rounded shadow-md" src={Gallery05} alt="" />
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img className="rounded shadow-md" src={Gallery06} alt="" />
            </div>
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <img className="rounded shadow-md" src={Gallery07} alt="" />
            </div>
          </div>
        </section>

        <section className="pt-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/3 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery08} alt="" />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery09} alt="" />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery10} alt="" />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery11} alt="" />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery12} alt="" />
            </div>
            <div className="md:w-1/3 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery13} alt="" />
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4 -mb-8">
            <div className="md:w-1/4 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery14} alt="" />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery15} alt="" />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery16} alt="" />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery17} alt="" />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery02} alt="" />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery19} alt="" />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery20} alt="" />
            </div>
            <div className="md:w-1/4 px-4 mb-8">
              <img className="rounded shadow-md" src={Gallery21} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
