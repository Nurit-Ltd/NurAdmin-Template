import { Helmet } from "react-helmet";
import AllTabs from "../components/screen/Download/AllTabs";

const Download = () => {
  return (
    <div>
       <Helmet>
        <title>Download Free Tailwind  Admin  Template-NurAdmin</title>
        <meta charSet="utf-8" name="description" content="NurAdmin download page" />
      </Helmet>
      <section className="relative pb-[4.375rem] pt-[8.75rem] sm:pb-[5.625rem] sm:pt-[13rem] xl:pb-[6.875rem] xl:pt-[14.25rem]">
        <span className="absolute bottom-0 z-[-1] block h-[900px] w-full rotate-180 bg-[linear-gradient(180deg,#F6FAFF_0%,rgba(246,250,255,0.00)_100%)]"></span>
        <div className="mx-auto max-w-[1200px] px-4 sm:px-8 xl:px-0">
          {/* title */}
          <div className="animate_bottom text-center">
            <h1 className="mb-2.5 text-3xl font-bold text-secondary sm:text-40xl sm:leading-48 xl:text-44xl xl:leading-60">
              Download NurAdmin Now
            </h1>
            <p className="md:text-lg">
              Select your preferred option below to start Download and Kickstart
              your journey.
            </p>
          </div>
          <AllTabs />
        </div>
      </section>
    </div>
  );
};

export default Download;
