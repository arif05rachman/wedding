import imagePA from "../assets/images/PA.png";
const Nav = () => {
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
        gap-2
        sm:gap-6
        place-self-end
      "
      >
        <a
          href="#invitation"
          className="transform hover:scale-110 transition-all"
        >
          INVITATION
        </a>
        <a href="#gallery" className="transform hover:scale-110 transition-all">
          GALLERY
        </a>
        <a href="#wishes" className=" transform hover:scale-110 transition-all">
          WISHES
        </a>
      </div>
    </nav>
  );
};
export default Nav;
