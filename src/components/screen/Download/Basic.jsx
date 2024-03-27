import { FaStar } from "react-icons/fa";
import { HiMiniGiftTop } from "react-icons/hi2";
import CrossSvg from "../../../common/CrossSvg";
import DimondSvg from "../../../common/DimondSvg";
import ErrorIconSvg from "../../../common/ErrorIconSvg";
import TickMarkSvg from "../../../common/TickMarkSvg";

const Basic = ({ basic, basicTitle, icon, downloadTitle }) => {
  const IconComponent = icon;
  return (
    <div className="relative rounded-[15px] shadow-2 duration-300  border border-garyBorder">
      <div className="h-full w-full rounded-xl bg-white p-4 sm:p-8 xl:p-10">
        <div className="mb-7.5 flex items-center gap-5">
          <div className="flex aspect-square w-full max-w-[72px] items-center justify-center rounded-3xl bg-grayBorderVar text-secondary">
            <HiMiniGiftTop size={40} />
          </div>
          <div>
            <h4 className="text-2xl font-medium text-secondary">Basic</h4>
            <p className="text-base font-medium">
              Free Open-source Version with Essentials
            </p>
          </div>
        </div>
        <h2 className="text-33xl leading-42 font-semibold text-secondary">
          {basicTitle}
        </h2>
        <span className="my-7.5 block h-[1px] w-full bg-garyBorder"></span>
        <ul className="flex flex-col gap-4">
          {basic.map((item, index) => (
            <li key={index} className="flex items-center gap-3.5">
              <span
                className={`group relative text-base font-normal ${
                  item.valid ? "text-secondary" : "false"
                }`}
              >
                <span>
                  {item.valid === "tickIcon" && <TickMarkSvg />}
                  {item.valid === "errorIcon" && <ErrorIconSvg />}
                  {item.valid === "crossIcon" && <CrossSvg />}
                </span>

                {item.valid === "errorIcon" && (
                  <span className="absolute -top-[72px] left-1/2 z-10 hidden w-[188px] -translate-x-1/2 rounded-md bg-secondary px-3.5 py-2 text-center text-xs text-white group-hover:block">
                    {item.tooltip}
                    <span className="absolute -bottom-[7px] left-0 right-0 mx-auto flex justify-center pr-2 text-secondary">
                      <DimondSvg />
                    </span>
                  </span>
                )}
              </span>
              <span className={item.valid ? "text-secondary" : "text-darkText"}>
                {item.content}
              </span>
            </li>
          ))}
        </ul>
        <button className="mt-9 flex w-full items-center justify-center gap-2 rounded-[10px] bg-secondary p-4 text-lg font-semibold text-white hover:shadow-md">
          <span>
            <IconComponent />
          </span>
          <span>{downloadTitle}</span>
        </button>
        <span className="mt-4 flex items-center justify-center text-center text-secondary ">
          <span className="pr-1.5 text-starYell">
            <FaStar size={18} />
          </span>
          Give us star a on
          <a href="#" className="ml-1 text-primary underline">
            GitHub
          </a>
        </span>
      </div>
    </div>
  );
};

export default Basic;
