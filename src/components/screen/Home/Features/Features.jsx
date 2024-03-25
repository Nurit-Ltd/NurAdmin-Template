import SectionTitle from "../../../shared/SectionTitle";
import FeaturesCard from "./FeaturesCard";
import FeaturesDecCard from "./FeaturesDecCard";

const Features = () => {
  return (
    <section id="features" className="relative z-10 py-18 sm:py-23 xl:py-27.5">
      <span className="custom-gradient-3 absolute bottom-0 left-0 -z-10 block h-[418px] w-full"></span>
      <div className="animate_bottom mx-auto max-w-[880px] px-4 text-center sm:px-8 xl:px-0">
        <SectionTitle
          title="Core Features"
          description="Ultimate Tailwind Dashboard – Crafted for your favourite Tech Stack"
        />
      </div>
      <div className="mx-auto mt-15 max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <FeaturesCard />
        <FeaturesDecCard />
      </div>
    </section>
  );
};

export default Features;
