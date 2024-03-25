import { bestApps } from "../../../data/bestApp";

const BestApp = () => {
  return (
    <section className="relative bg-white px-4 py-18 sm:px-8 sm:py-23 xl:px-0 xl:py-27.5">
      <h2 className="animate_bottom text-center text-3xl font-semibold text-secondary  sm:text-4xl">
        Chosen by the Best and Empowering Thousands of Apps
        <span className="mx-auto mt-7.5 block h-[3px] w-full max-w-[70px] bg-garyBorder"></span>
      </h2>
      <div className="mt-15 xl:mt-20">
        <div className="animate_bottom flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-10 xl:gap-14">
          {bestApps.map((app) => (
            <a
              key={app.id}
              href={app.link}
              className="w-1/3 hover:opacity-90 sm:w-auto"
            >
              <img
                src={app.src}
                alt={app.alt}
                className="w-full h-full object-fill"
              />
            </a>
          ))}
        </div>
      </div>
      <span className="custom-gradient-6  absolute bottom-0 left-1/2 block h-0.5 w-full max-w-[1200px] -translate-x-1/2"></span>
    </section>
  );
};

export default BestApp;
