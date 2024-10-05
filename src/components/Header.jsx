
import { brainwave, discordBlack } from "../assets";
import { navigation } from "../constants";
import { Link, useLocation } from "react-router-dom";

import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/design/Header";
import { useState } from "react";
//import GameMap from "./Map"; /*intisar change*/


const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll()
    } else {
      setOpenNavigation(true);
      disablePageScroll()
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 broder-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }  `}
    >
      <div className=" flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl;mr-8 " href="#hero">
          <img src={brainwave} width={190} height={10} alt="Climatter" />
        </a>
        <nav
          className={`${openNavigation ? "flex" : "hidden"
            }  fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent  `}
        >
          <div className=" relative z-2 flex flex-col items-center m-auto lg:flex-row">
            <a
              key="0"
              className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${"/Map" === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12  `}
            >
              <Link to="/Map">
                Map
              </Link>
            </a>
            <a
                key="1"
                href="https://team405found.github.io/dash/"
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  "https://team405found.github.io/dash/" === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12  `}
              >
                Analytics
              </a>
              <a
                key="2"
                href="https://team405found.github.io/quiz"
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  "https://team405found.github.io/quiz" === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12  `}
              >
                Quiz
              </a>
          </div>
          <HamburgerMenu />
        </nav>
        <Button className="ml-auto lg:hidden" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
