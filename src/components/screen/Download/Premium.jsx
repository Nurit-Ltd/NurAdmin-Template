import { FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";
import TickMarkSvg from "../../../components/common/TickMarkSvg";

const Premium = ({ premium,premiumTitle }) => {
  return (
    <div data-aos="zoom-in-left" className="relative rounded-[15px] shadow-md duration-300  bg-gradient-to-b from-primary to-primary/20 p-[3px]">
      <div className="h-full w-full rounded-xl bg-white p-4 sm:p-8 xl:p-10">
        <div className="mb-7.5 flex items-center gap-5">
          <div className="flex aspect-square w-full max-w-[72px] items-center justify-center rounded-3xl bg-grayBorderVar text-primary">
            <FaCrown size={40} />
          </div>
          <div>
            <h4 className="text-2xl font-medium text-primary">Premium</h4>
            <p className="text-base font-medium">
              Premium version with all Pro components
            </p>
          </div>
        </div>
        <h2 className="text-33xl leading-42 font-semibold text-secondary">
          {premiumTitle}
        </h2>
        <span className="my-7.5 block h-[1px] w-full bg-garyBorder"></span>
        <ul className="flex flex-col gap-4">
          {premium.map((item, index) => (
            <li key={index} className="flex items-center gap-3.5">
              <span>
                <TickMarkSvg />
              </span>
              <span className={item.valid ? "text-secondary" : "text-darkText"}>
                {item.content}
              </span>
            </li>
          ))}
        </ul>
        <Link to={"#"} className="mt-9 flex w-full justify-center rounded-[10px] bg-primary p-4 text-lg font-medium text-white hover:shadow-md ">View Pricing</Link>
      </div>
    </div>
  );
};

export default Premium;
