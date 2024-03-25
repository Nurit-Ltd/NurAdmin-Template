import HeroPartOne from "./HeroPartOne";
import HeroPartTwo from "./HeroPartTwo";

const HeroPart = () => {
  return (
    <section className="custom-gradient-2 dark:dark-gradient-1 relative z-10 overflow-hidden pt-[7.5rem] sm:pt-40 xl:pt-[11.25rem]">
      <HeroPartOne />
      <HeroPartTwo />
    </section>
  );
};

export default HeroPart;
