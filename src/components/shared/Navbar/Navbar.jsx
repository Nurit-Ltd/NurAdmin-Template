import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { VscMenu } from "react-icons/vsc";
import logo from "../../../assets/nur-logo.svg";
import { navItems } from "../../../data/navItems";
import NavDropdown from "./NavDropdown";
import SmallNav from "./SmallNav";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navHeight, setNavHeight] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const smallScreen = window.innerWidth <= 1280;

    if (smallScreen) {
      if (scrollPosition > 20) {
        setNavHeight(64);
      } else {
        setNavHeight(64);
      }
    } else {
      if (scrollPosition > 20) {
        setNavHeight(68);
      } else {
        setNavHeight(80);
      }
    }
  }, [scrollPosition]);

  const currentPath = window.location.pathname;

  return (
    <nav className="fixed left-0 top-0 right-0 z-[999]">
      <div className="w-full bg-white max-w-[1920px] mx-auto">
        <div
          className={`w-full h-[64px] xl:h-[80px] px-4 sm:px-8 xl:px-13 flex items-center justify-between gap-7 ${
            scrollPosition && "shadow"
          }`}
          style={{ height: `${navHeight}px` }}
        >
          <div className="flex w-full items-center justify-between xl:w-2/12 2xl:w-2/12">
            <a href="/" className="flex gap-3 items-center w-[172px] h-8">
              <img src={logo} alt="logo" width={100} height={100} />
              <span className="text-28xl font-semibold text-black">
                NurAdmin
              </span>
            </a>
          </div>
          <div className="xl:hidden" onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? (
              <RxCross2 size={27} className="text-black" />
            ) : (
              <VscMenu size={22} className="text-black" />
            )}
          </div>
          <div className="w-full hidden items-center justify-between lg:w-10/12 xl:visible xl:flex xl:h-auto 2xl:w-9/12">
            <nav>
              <ul className="flex flex-col gap-5 xl:flex-row xl:items-center 2xl:gap-9">
                {navItems.map((item, index) => (
                  <li key={index} className="nav__menu xl:py-7">
                    <a
                      href={item.link}
                      className={`font-medium ${
                        currentPath === item.link
                          ? "text-primary"
                          : "hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-3.5 lg:flex-row lg:items-center">
                <div className="w-[104px] h-[28px] flex items-center border border-garyBorder rounded">
                  <a
                    href="#"
                    className="w-[64px] h-full flex items-center gap-1 justify-center hover:bg-grayBg bg-bgLightGray text-grayText duration-200"
                  >
                    <span>
                      <FaGithub width={"16px"} height={"16px"} />
                    </span>
                    <span className="text-xs text-grayText">Star</span>
                  </a>
                  <a
                    href="#"
                    className="w-[40px] h-full flex items-center justify-center"
                  >
                    <span className="text-xs text-grayText hover:text-primary duration-150">
                      359
                    </span>
                  </a>
                </div>
                <NavDropdown />
              </div>
            </div>
          </div>

          {showMenu && <SmallNav currentPath={currentPath} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
