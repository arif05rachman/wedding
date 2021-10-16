import React, { useEffect, useState } from "react";
import { Carousel } from ".";
import axios from "axios";
import { API_URL } from "../constant";

const { WISHES_URL } = API_URL;

const Wishes = ({ language }) => {
  const [wishes, setWishes] = useState();
  const [isLoadingButton, setIsloadingButton] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [form, setForm] = useState({ name: "", post: "" });
  const fetchWishes = async () => {
    try {
      const req = await axios.get(WISHES_URL);
      if (req) {
        const { data } = req?.data;
        setWishes(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postWishes = async (e) => {
    e.preventDefault();
    setIsloadingButton(true);
    try {
      const res = await axios.post(WISHES_URL, form);
      if (res) {
        const { data } = res?.data;
        setWishes([data, ...wishes]);
        setForm({ name: "", post: "" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsloadingButton(false);
    }
  };

  const checkForm = (e) => {
    console.log(e.target.value);
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  useEffect(() => {
    if (form?.name && form?.post) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [form]);

  return (
    <section
      id="wishes"
      className="py-8 mb-32 font-cormorant-sc overflow-x-hidden"
    >
      <div className="w-full px-4 md:w-1/3 grid gap-6 md:text-lg mb-16 mx-auto">
        <h2 className="text-center md:text-lg sm:text-xs lg:text-3xl antialiased sm:subpixel-antialiased md:antialiased font-semibold">
          {language === "ID" ? "Ucapan" : "Wishes"}
        </h2>
        <p className="text-left">
          {language === "ID"
            ? `Anda masih dapat mengirimkan ucapan kepada kami! Pastikan Anda menuliskan nama anda
          agar kami dapat mengenalimu dengan mudah`
            : `you can still send us wishes! Make sure you write down your name
            so that all of us can recognize you easily`}
        </p>
        <form className="grid gap-4" onSubmit={(e) => postWishes(e)}>
          <div className="grid gap-2">
            <label htmlFor="wishes_name" className="font-medium text-left">
              {language === "ID" ? "Nama" : "Name"}
            </label>
            <input
              className="bg-white py-2 px-4 outline-none border border-linen focus:border-linen-darker"
              spellCheck="false"
              id="wishes_name"
              type="text"
              name="name"
              value={form?.name}
              onChange={(e) => checkForm(e)}
            ></input>
          </div>
          <div className="grid gap-2">
            <label htmlFor="wishes_wishes" className="font-medium text-left">
              {language === "ID"
                ? "Ucapan untuk Putri & Arif"
                : "Wishes for Putri & Arif"}
            </label>
            <textarea
              className="
      bg-white
      py-2
      px-4
      outline-none
      border border-linen
      focus:border-linen-darker
      h-36
    "
              type="text"
              spellCheck="false"
              id="wishes_wishes"
              name="post"
              value={form?.post}
              onChange={(e) => checkForm(e)}
            ></textarea>
          </div>
          <div className="w-full grid sm:block sm:text-right">
            <button
              type="submit"
              disabled={isDisabled || isLoadingButton}
              className={`py-2 px-4 bg-gold text-white font-bold uppercase ${
                !isLoadingButton
                  ? "transform hover:scale-105 transition-all rounded"
                  : ""
              } ${isDisabled ? "cursor-not-allowed" : ""} `}
            >
              <div className="flex justify-around items-center">
                {isLoadingButton ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white block"></div>
                ) : null}

                <div>{language === "ID" ? "Kirim Ucapan" : "SEND WISHES"}</div>
              </div>
            </button>
          </div>
        </form>
      </div>
      <Carousel wishes={wishes} language={language} />
    </section>
  );
};

export default Wishes;
