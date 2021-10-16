import imagePA from "../assets/images/PA.png";
import { ID, EN } from "../assets/images";
const Nav = ({ language, changeLaguage }) => {
  return (
    <nav
      className="
      grid grid-cols-3
      py-4
      sm:py-6
      px-8
      md:px-32
      opacity-60
      text-gray-700
      sm:font-medium
      text-sm
      md:text-lg
    "
    >
      <div id="logo" className="col-span-1 flex items-center">
        <img
          className="w-4 md:w-12"
          src={imagePA}
          alt="logo"
          width="48"
          height="48"
        />
      </div>
      <div
        id="menu"
        className="
        col-span-2
        grid grid-flow-col
        auto-cols-max
        gap-1
        sm:gap-4
        place-self-end
        justify-end
      "
      >
        <a
          href="#invitation"
          className="transform hover:scale-110 transition-all"
        >
          {language === "ID" ? "UNDANGAN" : "INVITATION"}
        </a>
        <a href="#gallery" className="transform hover:scale-110 transition-all">
          {language === "ID" ? "GALERI" : "GALLERY"}
        </a>
        <a href="#wishes" className=" transform hover:scale-110 transition-all">
          {language === "ID" ? "UNDANGAN" : "WISHES"}
        </a>
        <span className="flex justify-center align-middle gap-1">
          <button>
            <img
              src={ID}
              alt="ID"
              id="ID"
              className="w-5"
              onClick={changeLaguage}
              style={language === "ID" ? { filter: "grayscale(100%)" } : {}}
            />
          </button>
          <span> | </span>
          <button>
            <img
              src={EN}
              alt="EN"
              id="EN"
              className="w-5"
              onClick={changeLaguage}
              style={language === "EN" ? { filter: "grayscale(100%)" } : {}}
            />
          </button>
        </span>
      </div>
    </nav>
  );
};
export default Nav;
