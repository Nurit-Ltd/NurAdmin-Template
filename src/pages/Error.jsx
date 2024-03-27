import { Link } from "react-router-dom";
import ErrorOneSvg from "../components/common/ErrorOneSvg";

const Error = () => {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden pb-20 pt-40 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div>
        <div className="animate_bottom mx-auto w-full max-w-[570px] text-center">
          <span className="text-[100px] font-extrabold leading-normal text-secondary sm:text-[150px]">
            404
          </span>
          <h2 className="mb-3 text-2xl font-bold text-primary sm:text-4xl">
            Sorry, the page can not be found
          </h2>
          <p className="max-w-122.5 mx-auto mb-8">
            The page you were looking for appears to have been moved, deleted or
            does not exist.
          </p>
          <Link
            to={"/"}
            className="rounded bg-primary px-8 py-3 font-medium text-white hover:bg-opacity-90"
          >
            Back to homepage
          </Link>
        </div>
      </div>
      <div className="animate_left absolute bottom-0 left-0 -z-10">
        <ErrorOneSvg />
      </div>
      <div className="animate_right absolute right-0 top-0 -z-10">
        <ErrorOneSvg />
      </div>
    </section>
  );
};

export default Error;
