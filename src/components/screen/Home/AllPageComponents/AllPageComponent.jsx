import SectionTitle from "../../../shared/SectionTitle";
import DashBoardVariant from "./DashBoardVariant";


const AllPageComponent = () => {
  return (
    <section id="components" className="overflow-hidden bg-white py-18 sm:py-23 xl:py-27.5">
        <div className="animate_bottom mx-auto max-w-[1010px] px-4 text-center sm:px-8 xl:px-0">
        <SectionTitle
          title="All Pages and Components"
          description="200+ Highly Customizable Tailwind CSS Dashboard Components"
        />
        </div>
        <div className="mx-auto mt-15 max-w-[1530px] px-4 sm:px-8 xl:px-8">
            <DashBoardVariant />
        </div>
    </section>
  );
};

export default AllPageComponent;