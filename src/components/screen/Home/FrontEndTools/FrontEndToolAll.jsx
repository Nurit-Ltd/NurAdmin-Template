import { BsArrowRight } from "react-icons/bs";
import DotsSvg from "../../../../components/common/DotsSvg";
import MessengerSvg from "../../../../components/common/ToolsAndTechSvg/MessengerSvg";
import { frontEndToolAll } from "../../../../data/frontEndToolAll";
import SectionTitle from "../../../shared/SectionTitle";

const FrontEndToolAll = () => {
  return (
    <section className="relative z-[1] pt-18 sm:pt-23 xl:pt-27.5">
      <div className="animate_bottom mx-auto mb-15 max-w-[55rem] px-4 text-center sm:px-8 xl:px-0">
        <SectionTitle
          title="Ready to use with your favorite front-end tools"
          description="NurAdmin is now available for HTML, React, and Vue"
        />
      </div>
      <div className="px-4 2xl:px-[115px]">
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {frontEndToolAll.map((tool, index) => (
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1000"
              key={index}
              className="rounded-2xl border border-garyBorder bg-white px-6 py-13 shadow-[0px_20px_80px_0px_rgba(9,14,34,0.06)] duration-300 hover:shadow-none flex flex-col justify-between"
            >
              <div className="mx-auto w-full h-auto max-w-[280px] text-center">
                <div className="mb-10 flex items-center justify-center gap-[1.625rem] rounded-full border-[.8px] border-garyBorder bg-grayBgSub p-3">
                  <span className="flex aspect-square w-full max-w-[75] items-center justify-center rounded-full bg-white shadow-[0px_0.83px_1.67px_0px_rgba(84,87,118,.1)]">
                    <tool.icon />
                  </span>
                  <span>
                    <DotsSvg />
                  </span>
                  <span className="flex aspect-square w-full max-w-[75] items-center justify-center rounded-full bg-white shadow-[0px_0.83px_1.67px_0px_rgba(84,87,118,.1)]">
                    <MessengerSvg />
                  </span>
                </div>

                <div>
                  <h3
                    className={`mb-2.5 text-2xl font-semibold text-secondary ${
                      index === 0 || index === 2 || index === 3
                        ? "opacity-50"
                        : ""
                    }`}
                  >
                    {tool.name}
                  </h3>
                  <p className="mb-7.5 text-base">{tool.description}</p>
                </div>
              </div>

              {/* <button className="flex h-[3.125rem] w-full items-center justify-center gap-2 rounded-[7px] bg-secondary px-6 text-base font-medium text-white duration-300 hover:bg-primary">
                {tool.buttonLabel} <BsArrowRight size={20} />
              </button> */}
              <button
                className={`flex h-[3.125rem] w-full items-center justify-center gap-2 rounded-[7px] bg-secondary px-6 text-base font-medium text-white duration-300 hover:bg-primary ${
                  index === 0 || index === 2 || index === 3
                    ? "opacity-50 pointer-events-none"
                    : ""
                }`}
              >
                {tool.buttonLabel} <BsArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrontEndToolAll;
