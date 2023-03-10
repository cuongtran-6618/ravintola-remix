import { NavLink } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function Navigations() {
  const navigationItemClass =
    "font-sans nav-item font-bold hover:text-red-200 hover:decoration-red-200 hover:underline-offset-8 hover:underline";

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeMobileNav = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="text-xl py-8 px-4 flex justify-between items-center bg-tumma-puu align-center">
      <div className="logo-container order-first text-white ">
        <NavLink to="/">Ravintola</NavLink>
      </div>
      <div className="order-last lg:order-1">
        <nav id="main-navigation">
          <button className="lg:hidden" onClick={toggleMobileNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </button>
          <div
            id="navigation-container-wrapper"
            className={
              isNavOpen
                ? "fixed top-0 bottom-0 right-0 left-0 bg-white z-2 p-8 "
                : "hidden lg:relative lg:bg-none lg:block"
            }
          >
            <div className="relative">
              <button
                className="absolute top-0 right-0 z-2 lg:hidden"
                onClick={closeMobileNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div id="navigation-container" className="pt-16 lg:p-0">
                <ul className="flex flex-col justify-center align-baseline lg:flex-row gap-6 lg:text-white">
                  <li className={navigationItemClass} onClick={closeMobileNav}>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className={navigationItemClass} onClick={closeMobileNav}>
                    <NavLink to="/menu">Menu</NavLink>
                  </li>
                  <li className={navigationItemClass} onClick={closeMobileNav}>
                    <NavLink to="/our-story">Our story</NavLink>
                  </li>
                  <li className={navigationItemClass} onClick={closeMobileNav}>
                    <NavLink to="/groups-and-events">Groups and events</NavLink>
                  </li>
                  <li className={navigationItemClass} onClick={closeMobileNav}>
                    <NavLink to="/gallery">Gallery</NavLink>
                  </li>
                  <li className={navigationItemClass} onClick={closeMobileNav}>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="language-swticher-container order-1 text-white lg:order-last">
        <ul>
          <li>ENG</li>
        </ul>
      </div>
    </div>
  );
}
