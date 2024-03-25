import { useState } from "react";
// import BestValueSvg from "../../../common/BestValueSvg";
import { FaHtml5, FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";
import { twoTabsData } from "../../../data/twoTabsData";
import TwoPartsTabs from "./TwoPartsTabs";

const AllTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: "HTML", icon: <FaHtml5 />, Color: "text-activeYell", bgColor: "bg-activeYell" },
    { name: "React", icon: <FaReact />, Color: "text-blueReact" , bgColor: "bg-gradient-to-r from-[#47ccf0] to-[#58d4f6]" },
    { name: "Next.js", icon: <SiNextdotjs />, Color: "text-black", bgColor: "bg-black" },
    { name: "Vue.js", icon: <FaVuejs />, Color: "text-VueColor", bgColor: "bg-vueBg" },
    {
      name: "All Together - Bundle",
      icon: <FiCodesandbox />,
      Color: "text-boxBlue", bgColor: "bg-boxBg"
    },
  ];
  return (
    <div>
      <div className="mt-10 flex w-full justify-center lg:mt-16">
        <div className="relative inline-flex flex-wrap items-center justify-center gap-3 rounded-lg bg-bgDownload p-2">
          <div className="absolute -top-10 right-10 hidden lg:block">
            {/* <BestValueSvg /> */}
          </div>
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`inline-flex h-[40px] items-center gap-3 rounded-lg px-[18px] font-semibold outline-none ${
                activeTab === index
                  ? `${tab.bgColor} shadow-[0px_1px_2px_0px_rgba(166,175,195,0.35)]`
                  : "bg-transparent"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <span
                className={`text-xl ${
                  activeTab === index ? "text-white" : tab.Color
                }`}
              >
                {tab.icon}
              </span>
              <span
                className={`${
                  activeTab === index ? "text-white" : "text-secondary"
                }`}
              >
                {tab.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      
        {activeTab === 0 && (
          <div>
            {twoTabsData.slice(0, 1).map((bAndP, index) => (
              <TwoPartsTabs key={index} bAndP={bAndP} />
            ))}
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {twoTabsData.slice(1, 2).map((bAndP, index) => (
              <TwoPartsTabs key={index} bAndP={bAndP} />
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {twoTabsData.slice(2, 3).map((bAndP, index) => (
              <TwoPartsTabs key={index} bAndP={bAndP} />
            ))}
          </div>
        )}
        {activeTab === 3 && (
          <div>
            {twoTabsData.slice(3, 4).map((bAndP, index) => (
              <TwoPartsTabs key={index} bAndP={bAndP} />
            ))}
          </div>
        )}
        {activeTab === 4 && (
          <div>
            {twoTabsData.slice(4, 5).map((bAndP, index) => (
              <TwoPartsTabs key={index} bAndP={bAndP} />
            ))}
          </div>
        )}

    
      
    </div>
  );
};

export default AllTabs;
