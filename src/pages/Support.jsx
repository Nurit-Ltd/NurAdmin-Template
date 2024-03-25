import FormSupport from "../components/screen/SupportPage/FormSupport";

const Support = () => {
  return (
    <section className="relative z-10 pb-18 pt-35 sm:pb-23 sm:pt-52 xl:pb-27.5 xl:pt-57">
      <span className="custom-gradient-5 absolute bottom-0 -z-10 block h-full w-full"></span>
      <div className="mx-auto max-w-[876px] px-4 sm:px-8 xl:px-0">
        {/* title part */}
        <div className="animate_bottom text-center">
          <h1 className="mb-2.5 text-4xl font-bold text-secondary  sm:text-40xl sm:leading-48 xl:text-44xl xl:leading-60">
            Need any Help?
          </h1>
          <p className="md:text-lg">
            Open a ticket, we will get back to you ASAP
          </p>
        </div>
         {/* Form Part */}
         <FormSupport />
      </div>
    </section>
  );
};

export default Support;
