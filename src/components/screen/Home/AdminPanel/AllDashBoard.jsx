import grid from "../../../../assets/images/home/allpanel/gridblank.svg";
import { allPanelImages } from "../../../../data/allPanelImages";
import { panelsData } from "../../../../data/panelDashData";
import PanelTextDoc from "./PanelTextDoc";

const AllDashBoard = () => {
  return (
    <div className="mb-20 flex items-center gap-[60px] sm:mb-25 xl:gap-20">
      {/* left side */}
      <div className="relative hidden w-full lg:block">
        <div className="flex gap-x-[18px]">
          <div className="w-full max-w-[261px] space-y-[18px]">
            {allPanelImages.slice(0, 3).map((image, index) => (
              <div
                key={index}
                className={`animate_left relative aspect-[${image.aspectRatio}]`}
              >
                <img
                  src={image.imageUrl}
                  alt={image.altText}
                  className="ml-auto w-full h-full shadow-10"
                />
              </div>
            ))}
          </div>
          <div className="mt-4.5 w-full max-w-[224px] space-y-[18px]">
            {allPanelImages.slice(3).map((image, index) => (
              <div
                key={index}
                className={`animate_left relative aspect-[${image.aspectRatio}]`}
              >
                <img
                  src={image.imageUrl}
                  alt={image.altText}
                  className="ml-auto w-full h-full shadow-10"
                />
              </div>
            ))}
          </div>
        </div>
        {/* blur */}
        <div className="absolute -bottom-11 left-1/2 z-[-1] -translate-x-1/2">
          <img src={grid} alt="grid" className="" />
        </div>
        <div className="features-gradient-2 absolute left-1/2 top-1/2 z-[-1] h-[382px] w-full max-w-[382px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[62px]"></div>
        <div className="features-gradient-2 absolute left-1/2 top-1/2 z-[-1] h-[162px] w-full max-w-[162px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[62px]"></div>
      </div>
       {/* right side */}
       {panelsData.slice(1, 2).map((panel, index) => (
        <PanelTextDoc key={index} {...panel} />
      ))}
    </div>
  );
};

export default AllDashBoard;
