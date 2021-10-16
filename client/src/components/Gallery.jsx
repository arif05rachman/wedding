import React from "react";
import {
  L01,
  L02,
  P01,
  P02,
  P03,
  P04,
  P05,
  P06,
  P07,
  P08,
  P09,
  P10,
  P11,
  P12,
  P13,
} from "../assets/images/gallery";
import { FadeInSection } from ".";
const Gallery = ({ language }) => {
  return (
    <div id="gallery">
      <h2 className="text-center md:text-lg sm:text-xs lg:text-3xl antialiased sm:subpixel-antialiased md:antialiased font-semibold">
        {language === "ID" ? "GALERI" : "GALLERY"}
      </h2>
      <div className="container mx-auto px-4">
        <FadeInSection>
          <section className="py-8 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="hidden md:block md:w-1/2 px-4">
                <div
                  className="h-full w-full bg-cover rounded shadow-md"
                  style={{
                    backgroundImage: `url(${P01})`,
                  }}
                ></div>
              </div>
              <div className="md:w-1/2 h-auto px-4">
                <div className="mb-8">
                  <img className="rounded shadow-md" src={L01} alt="" />
                </div>
                <div>
                  <img className="rounded shadow-md" src={L02} alt="" />
                </div>
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="py-8 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                <img className="rounded shadow-md" src={P09} alt="" />
              </div>
              <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                <img className="rounded shadow-md" src={P03} alt="" />
              </div>
            </div>
          </section>
        </FadeInSection>

        <FadeInSection>
          <section className="py-8 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                <img className="rounded shadow-md" src={P06} alt="" />
              </div>
              <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                <img className="rounded shadow-md" src={P02} alt="" />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="py-8 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                <img className="rounded shadow-md" src={P04} alt="" />
              </div>
              <div className="md:w-1/2 px-4 mb-8 md:mb-0">
                <img className="rounded shadow-md" src={P05} alt="" />
              </div>
            </div>
          </section>
        </FadeInSection>
        <FadeInSection>
          <section className="pt-8 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="md:w-1/3 px-4 mb-8">
                <img className="rounded shadow-md" src={P07} alt="" />
              </div>
              <div className="md:w-1/3 px-4 mb-8">
                <img className="rounded shadow-md" src={P08} alt="" />
              </div>
              <div className="md:w-1/3 px-4 mb-8">
                <img className="rounded shadow-md" src={P10} alt="" />
              </div>
              <div className="md:w-1/3 px-4 mb-8">
                <img className="rounded shadow-md" src={P11} alt="" />
              </div>
              <div className="md:w-1/3 px-4 mb-8">
                <img className="rounded shadow-md" src={P12} alt="" />
              </div>
              <div className="md:w-1/3 px-4 mb-8">
                <img className="rounded shadow-md" src={P13} alt="" />
              </div>
            </div>
          </section>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Gallery;
