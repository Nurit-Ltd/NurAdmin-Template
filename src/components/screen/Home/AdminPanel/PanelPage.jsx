import SectionTitle from "../../../shared/SectionTitle";
import AllDashBoard from "./AllDashBoard";
import ChartMapDashBoard from "./ChartMapDashBoard";
import UniqueDashboard from "./UniqueDashboard";

const PanelPage = () => {
  return (
    <section className="relative z-[1] overflow-hidden bg-white py-18 sm:py-23 xl:py-27.5">
      <div className="animate_bottom mx-auto max-w-[480px] px-4 text-center sm:px-8 xl:px-0">
        <SectionTitle
          title="Other Notable Features"
          description="Build Admin Panel Effortlessly"
        />
      </div>
      <div className="mx-auto mt-20 max-w-[1170px] px-4 sm:mt-25 sm:px-8 xl:px-0">
        <UniqueDashboard />
        <AllDashBoard />
        <ChartMapDashBoard />
      </div>
    </section>
  );
};

export default PanelPage;
