import { useState } from "react"; // Import useState hook
import { FaCaretDown } from "react-icons/fa";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import HtmlSvg from "../../../common/HtmlSvg";
import NextSvg from "../../../common/NextSvg";
import ReactSvg from "../../../common/ReactSvg";
import VueSvg from "../../../common/VueSvg";

const dropdownItems = [
  {
    id: 1,
    icon: <HtmlSvg />,
    text: "Preview HTML",
    link: "https://nur-admin-dashboard.vercel.app/"
  },
  {
    id: 2,
    icon: <ReactSvg />,
    text: "Preview React",
    link: "https://nur-admin-dashboard.vercel.app/"
  },
  {
    id: 3,
    icon: <NextSvg />,
    text: "Preview Next",
    link: "https://nur-admin-dashboard.vercel.app/"
  },
  {
    id: 4,
    icon: <VueSvg />,
    text: "Preview Vue",
    link: "https://nur-admin-dashboard.vercel.app/"
  }
];

const NavDropdown = () => {
  const [hoveredItem, setHoveredItem] = useState(null); // State to track hovered item

  return (
    <div className="group relative">
      <Link to={"https://nur-admin-dashboard.vercel.app/"} className="w-[164px] h-11 flex items-center justify-center gap-2 bg-secondary rounded-[10px] font-medium text-white">
        Live Preview
        <span>
          <FaCaretDown size={20} />
        </span>
      </Link>
      <div className="mt-3 invisible w-[220px] max-w-max rounded-custom-1 border-[0.5px] border-gray-3 bg-white p-2.5 rounded-[10px] scroll-shadow group-hover:visible lg:absolute duration-500">
        <ul className="flex flex-col gap-2">
          {dropdownItems.map(item => (
            <li 
              key={item.id} 
              className="group"
              onMouseEnter={() => setHoveredItem(item.id)} // Set hovered item
              onMouseLeave={() => setHoveredItem(null)} // Clear hovered item
            >
              <a
                href={item.link}
                className="flex items-center justify-center gap-2 rounded px-2.5 py-1.5 hover:bg-grayBgSub hover:text-secondary relative"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
                <span className={`pl-[10px] ${hoveredItem === item.id ? '' : 'invisible'}`}>
                  <LuArrowUpRightSquare size={18} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDropdown;
