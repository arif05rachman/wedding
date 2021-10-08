import React, { useEffect, useState } from "react";
import { Carousel } from ".";
import axios from "axios";
import { API_URL } from "../constant";

const { WISHES_URL } = API_URL;

const Wishes = () => {
  const [wishes, setWishes] = useState();
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
    try {
      const res = await axios.post(WISHES_URL, form);
      const { data } = res?.data;
      console.log(data);
      setWishes([...wishes, data]);
    } catch (error) {
      console.log(error);
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
    }
  }, [form]);

  return (
    <section
      id="wishes"
      className="py-8 mb-32 font-cormorant-sc overflow-x-hidden"
    >
      <div className="w-full px-4 md:w-1/3 grid gap-6 md:text-lg mb-16 mx-auto">
        <h2 className="text-center md:text-lg sm:text-xs lg:text-3xl antialiased sm:subpixel-antialiased md:antialiased font-semibold">
          Wishes
        </h2>
        <p className="text-left">
          Yes, you can still send us wishes! Make sure you write down your name
          so that all of us can recognize you easily ^_^
        </p>
        <form
          className="grid gap-4"
          onSubmit={(e) => postWishes(e)}
          onChange={(e) => checkForm(e)}
        >
          <div className="grid gap-2">
            <label htmlFor="wishes_name" className="font-medium text-left">
              Name
            </label>
            <input
              className="bg-white py-2 px-4 outline-none border border-linen focus:border-linen-darker"
              spellCheck="false"
              id="wishes_name"
              type="text"
              name="name"
            ></input>
          </div>
          <div className="grid gap-2">
            <label htmlFor="wishes_wishes" className="font-medium text-left">
              Wishes for Putri &amp; Arif
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
            ></textarea>
          </div>
          <div className="w-full grid sm:block sm:text-right">
            <button
              type="submit"
              disabled={isDisabled}
              style={{ backgroundColor: "#d5ad6d" }}
              className={`py-2 px-4 text-white font-bold rounded-lg ${
                isDisabled ? "cursor-not-allowed" : ""
              } `}
            >
              SEND WISHES
            </button>
          </div>
        </form>
      </div>
      <Carousel wishes={wishes} />
    </section>
  );
};

export default Wishes;
