import { FaGithub } from "react-icons/fa";
import { navItems } from "../../../data/navItems";
import NavDropdown from "./NavDropdown";

const SmallNav = ({currentPath}) => {
  return (
    <div className="fixed z-50 left-0 top-[64px] w-full max-h-[400px] border-r  ease-in-out duration-700 bg-white xl:hidden  overflow-y-auto">
      <div className="pl-[62px] py-[30px] pr-[30px]">
         
          <ul className="flex flex-col gap-5 xl:flex-row xl:items-center 2xl:gap-9">
            {navItems.map((item, index) => (
              <li key={index} className="nav__menu xl:py-7">
                <a href={item.link} className={`font-medium ${
                        currentPath === item.link
                          ? "text-primary"
                          : "hover:text-primary"
                      }`}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
      
        <div className="mt-7 py-4 flex items-center gap-3">
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
    </div>
  );
};

export default SmallNav;
