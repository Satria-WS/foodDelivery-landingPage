import { LuChefHat } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { NavbarMenu } from "../data/navbarMenu";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineMenuOpen } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);

  const handleClick = () => {
    setHasSpun(false); // Set to true only once on first click

    setOpen((prevOpen) => !prevOpen);
  };
  console.log(hasSpun);
  return (
    <>
      <nav>
        <div className="container">
          <div className="flex items-center justify-between py-8">
            {/* logo section */}
            <div className="text-2xl flex items-center gap-2 font-bold uppercase">
              <LuChefHat />
              <p>Foo</p>
            </div>
            {/* menu section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-gray-600">
                {NavbarMenu.map((item, index) => (
                  <li key={index}>
                    <a
                      className="inline-block py-1 px-3 hover:text-secondary font-semibold"
                      href={item.link}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* search section */}
            <div>
              <button className="text-2xl hover:bg-secondary hover:text-white rounded-full duration-200 p-2">
                <CiSearch />
              </button>
            </div>
            {/* Mobile hamburger menu section */}
            <div className="md:hidden" onClick={handleClick}>
              {open ? (
                <MdOutlineMenuOpen
                  className={`text-4xl ${hasSpun ? "animate-spin-once" : ""}`}
                />
              ) : (
                <MdOutlineMenu
                  className={`text-4xl ${hasSpun ? "animate-spin-once" : ""}`}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
      {/* mobile sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
};
export default Navbar;
