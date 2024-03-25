import { FaAward } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import DownloadSvg from "../../../../common/DownloadSvg";
import { tools } from "../../../../data/heroTools";

const HeroPartOne = () => {
  return (
    <div className="mx-auto max-w-[55.625rem] px-4 sm:px-8 xl:px-0">
      <div className="animate_bottom text-center">
        <div className="mb-4.5 inline-flex items-center justify-center gap-3 rounded-3xl bg-primary/5 px-3 py-1.5 text-lg font-semibold text-primary">
          <span>
            <FaAward />
          </span>
          Industry-leading Tailwind CSS Dashboard Kit with Multi-Framework
          Support
        </div>
        <h1 className="mx-auto mb-6 w-full max-w-[750px] text-3xl font-bold text-secondary sm:text-40xl sm:leading-48 xl:w-11/12  xl:text-48xl xl:leading-58">
          Open-Source Tailwind CSS
          <span className="text-primary"> Admin Dashboard Template</span>
        </h1>
        <p className="mb-8.5 md:text-lg">
          NurAdmin is a Tailwind CSS-based Admin Dashboard Template that
          provides developers with everything they need to create feature-rich
          back-ends, dashboards, and admin panels for web projects. Empowering
          developers with essential UI components, elements, and pages required
          to build a complete Dashboard or Admin panel – Now available for HTML,
          React, Next.js, and Vue!
        </p>
        <div>
          <p className="mb-5 text-base font-medium text-secondary opacity-100">
            Built with and Available for your favorite Tools and Technology
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-4">
            {tools.map((tool, index) => (
              <li key={index}>
                <p className="group relative flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-white shadow-1 opacity-100">
                  <span className="absolute -top-10 hidden w-max rounded-md bg-secondary px-3.5 py-1.5 text-custom-sm text-white group-hover:block ">
                    {tool.name}
                    <span className="absolute -bottom-1 left-1/2 block h-2 w-2 -translate-x-1/2 rotate-45 bg-secondary"></span>
                  </span>
                  {tool.icon && <tool.icon size={32} className="text-black" />}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-[7px] bg-primary px-7.5 py-3 font-medium text-white hover:shadow-xl"
          >
            Download Now
            <span>
              <DownloadSvg />
            </span>
          </a>
          <a
            href="#"
            className="mt-9 inline-flex items-center gap-2 rounded-[7px]  border border-primary px-7.5 py-3 font-medium text-primary duration-300 hover:bg-primary hover:text-white"
          >
            Live Preview
            <span>
              <IoMdEye size={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPartOne;
