import gridPic from "../../../../assets/images/home/grid.svg";
import { panelsData } from "../../../../data/panelDashData";
import { uniqueDashData } from "../../../../data/uniqueDashboard";
import PanelTextDoc from "./PanelTextDoc";

const UniqueDashboard = () => {
  return (
    <div className="mb-20 flex items-center gap-[3.75rem] sm:mb-[6.25rem] xl:gap-20">
      {/* left part */}
      {panelsData.slice(0, 1).map((panel, index) => (
        <PanelTextDoc key={index} {...panel} />
      ))}

      {/* right part*/}
      <div className="relative hidden w-full lg:block">
        <div className="flex w-full flex-wrap gap-x-6 gap-y-[26px]">
          {uniqueDashData.map((admin) => (
            <div
              data-aos="zoom-in-left"
              key={admin.id}
              className={`animate_right w-full max-w-[200px] xl:max-w-[248px] ${
                admin.id === 3 ? "mt-[-26px]" : ""
              }`}
            >
             <div
                className={`relative aspect-[${admin.aspectRatio}] w-full max-w-[200px] xl:max-w-[248px] bg-white p-4 rounded-[15px]`}
                style={{ height: admin.id === 2 || admin.id === 3 ? "240px" : "200px" }}
              >
                <img src={admin.imageUrl} alt={admin.altText} className="w-full h-full object-contain" />
              </div>
            </div>
          ))}
        </div>
        {/* bg blur */}
        <div className="absolute -bottom-11 left-1/2 z-[-1] -translate-x-1/2">
          <img src={gridPic} alt="gridPic" />
        </div>
        <div className="features-gradient-1 absolute left-1/2 top-1/2 z-[-1] h-[382px] w-full max-w-[382px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 blur-[150px]"></div>
        <div className="features-gradient-1 absolute left-1/2 top-1/2 z-[-1] h-[162px] w-full max-w-[162px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-75 blur-[75px]"></div>
      </div>
    </div>
  );
};

export default UniqueDashboard;
