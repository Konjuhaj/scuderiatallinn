import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { pathname } = useLocation();
  const navRef = React.useRef(null);

  React.useEffect(() => {
    const closeNavOnOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenNav(false);
      }
    };

    const body = document.querySelector("body");
    if (openNav) {

      body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      body.style.overflow = "auto"; // Allow scrolling
    }

    document.addEventListener("click", closeNavOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeNavOnOutsideClick);
      body.style.overflow = "auto"
    };
  }, [openNav]);

  return (
    <nav id="navbar" className="bg-white sticky top-0">
      <div className="flex flex-wrap items-center justify-between mx-auto py-4 px-6">
        <a
          href="http://localhost:5173/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={process.env.PUBLIC_URL + "/src/assets/Scuderia_Tallinn_Logo_White.jpg"}
            className="h-8"
            alt="Scuderia Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Scuderia Tallinn
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:none "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={(e) => {
            e.stopPropagation();
            setOpenNav(!openNav);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          ref={navRef}
          className={
            openNav
              ? "w-full sm:block sm:w-auto"
              : "hidden w-full sm:block sm:w-auto"
          }
          id="navbar-default"
        >
          <ul
            className="font-medium w-full sm:w-auto h-svh justify-center items-center sm:h-auto pb-28 flex flex-col p-4 sm:relative sm:p-0 mt-4 sm:flex-row sm:space-x-6 rtl:space-x-reverse sm:mt-0">
            <li>
              <HashLink
                to="/#"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'top' })}
                className={"block py-2 px-3 text-black rounded sm:bg-transparent sm:p-0 sm:hover:text-red-500" +
                  (pathname === "/" ? " sm:text-red-500" : "")
                }
                onClick={() => {
                  if (pathname === "/" || pathname === "/#events" || pathname === "/contact") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                  setOpenNav(false);
                }}>
                Home</HashLink>
            </li>
            <li>
              <NavLink
                to="/cars"
                className={
                  "block py-2 px-3 text-gray-900 rounded sm:hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-red-500 sm:p-0" +
                  (pathname === "/cars" ? " text-red-500" : "")
                }
                onClick={() => setOpenNav(false)}
              >
                Cars

              </NavLink>
            </li>
            <li>
              <HashLink
                to="/#events"
                className="block py-2 px-3 text-gray-900 rounded sm:hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-red-500 sm:p-0 dark:text-black "
                onClick={() => setOpenNav(false)}
              >
                Events
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#showroom"
                className="block py-2 px-3 text-gray-900 rounded sm:hover:bg-gray-100 sm:hover:bg-transparent sm:border-0 sm:hover:text-red-500 sm:p-0 dark:text-black "
                onClick={() => setOpenNav(false)}
              >
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}