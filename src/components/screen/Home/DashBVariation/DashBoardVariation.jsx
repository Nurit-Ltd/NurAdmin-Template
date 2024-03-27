import VariSecondSvg from "../../../../components/common/VariSecondSvg";
import VariationSvg from "../../../../components/common/VariationSvg";
import SectionTitle from "../../../shared/SectionTitle";
import VariationCard from "./VariationCard";

const DashBoardVariation = () => {
  return (
    <section className="relative z-[1] overflow-hidden bg-grayBgSub py-18 sm:py-23 xl:py-27.5">

       {/* title */}
      <div className="animate_bottom mx-auto max-w-[880px] px-4 text-center sm:px-8 xl:px-0">
        <SectionTitle
          title="5 Dashboard Variations"
          description="E-Commerce, Analytics, Marketing, CRM, Stocks and – More Coming Soon!"
        />
      </div>

      {/* main div */}
      <VariationCard />
       
       {/* bg blur and color */}
      <div className="right-o absolute bottom-0 left-0 -z-10">
        <VariationSvg />
      </div>
      <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
        <VariSecondSvg />
      </div>
    </section>
  );
};

export default DashBoardVariation;
