import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";
import DotsSvg from "../../../../common/DotsSvg";
import MessengerSvg from "../../../../common/ToolsAndTechSvg/MessengerSvg";
import TechHtmlSvg from "../../../../common/ToolsAndTechSvg/TechHtmlSvg";
import TechReactSvg from "../../../../common/ToolsAndTechSvg/TechReactSvg";
import TechVue from "../../../../common/ToolsAndTechSvg/TechVue";
import SectionTitle from "../../../shared/SectionTitle";

const FrontEndToolAll = () => {
  const [frontEndTools, setFrontEndTools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          name: "HTML + Tailwind",
          description:
            "TailAdmin HTML: Built-with Tailwind CSS, HTML and Alpine.js",
          buttonLabel: "Explore",
          icon: <TechHtmlSvg className="w-9 h-9" />,
        },
        {
          name: "React.js + Tailwind",
          description:
            "TailAdmin React: Built-with Tailwind CSS, React.js and TypeScript",
          buttonLabel: "Explore",
          icon: <TechReactSvg className="w-[39px] h-[38px]" />,
        },
        {
          name: "Next.js + Tailwind",
          description:
            "TailAdmin Next.js: Built-with Tailwind CSS, Next.js and TypeScript",
          buttonLabel: "Explore",
          icon: <SiNextdotjs size={38} className="text-black" />,
        },
        {
          name: "Vue.js + Tailwind",
          description: "TailAdmin Vue: Built-with Tailwind CSS and Vue.js",
          buttonLabel: "Explore",
          icon: <TechVue className="w-[39px] h-[38px]" />,
        },
      ];

      setFrontEndTools(data);
    };

    fetchData();
  }, []);

  return (
    <section className="relative z-1 pt-18 sm:pt-23 xl:pt-27.5">
      <div className="animate_bottom mx-auto mb-15 max-w-[55rem] px-4 text-center sm:px-8 xl:px-0">
         <SectionTitle title="Ready to use with your favorite front-end tools" description="TailAdmin is now available for HTML, React, and Vue" />
        
      </div>
      <div className="px-4 2xl:px-[115px]">
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {frontEndTools.map((tool, index) => (
            <div
              key={index}
              className="rounded-2xl  border border-garyBorder bg-white px-6 py-13 shadow-[0px_20px_80px_0px_rgba(9,14,34,0.06)] duration-300 hover:shadow-none"
            >
              <div className="mx-auto w-full max-w-[280px] text-center">
                <div className="mb-10 flex items-center justify-center gap-[1.625rem] rounded-full border-[.8px] border-garyBorder bg-grayBgSub p-3">
                  <span className="flex aspect-square w-full max-w-[75] items-center justify-center rounded-full bg-white shadow-[0px_0.83px_1.67px_0px_rgba(84,87,118,.1)]">
                    {tool.icon}
                  </span>
                  <span>
                    <DotsSvg />
                  </span>
                  <span className="flex aspect-square w-full max-w-[75] items-center justify-center rounded-full bg-white shadow-[0px_0.83px_1.67px_0px_rgba(84,87,118,.1)]">
                    <MessengerSvg />
                  </span>
                </div>
                <div>
                  <h3 className="mb-2.5 text-2xl font-semibold text-secondary">
                    {tool.name}
                  </h3>
                  <p className="mb-7.5 text-base">{tool.description}</p>
                  <button className="flex h-[3.125rem] w-full items-center justify-center gap-2 rounded-[7px] bg-secondary px-6 text-base font-medium text-white duration-300 hover:bg-primary">
                    {tool.buttonLabel} <BsArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontEndToolAll;
