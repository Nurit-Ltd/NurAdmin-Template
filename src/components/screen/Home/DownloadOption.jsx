import { Link } from "react-router-dom";
import DownloadSvg from "../../../common/DownloadSvg";

const DownloadOption = () => {
  return (
    <>
      <section className="overflow-hidden bg-white py-15">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="animate_left sm:w-3/5 lg:w-1/2">
              <h2 className="text-28xl leading-10 font-semibold text-secondary lg:text-3xl xl:text-40xl xl:leading-48">
                What are you waiting for?
              </h2>
              <p className="mt-3 text-lg">
                Download NurAdmin for Free – Transform Your Web Projects Now!
              </p>
            </div>
            <div className="sm:text-right">
              <Link
                to={"/download"}
                className="animate_right inline-flex items-center gap-2 rounded-[10px] bg-primary px-7.5 py-3 font-medium text-white hover:shadow-md"
              >
                Download Now
                <DownloadSvg />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto h-[1px] max-w-[1170px] bg-garyBorder px-4 sm:px-8 xl:px-0"></div>
    </>
  );
};

export default DownloadOption;
