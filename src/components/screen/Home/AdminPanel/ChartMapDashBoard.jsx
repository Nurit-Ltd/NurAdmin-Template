import ChartGrid from "../../../../assets/images/home/chart/chartGrid.svg";
import { chartPanel } from "../../../../data/chartPanel";
import { panelsData } from "../../../../data/panelDashData";
import PanelTextDoc from "./PanelTextDoc";

const ChartMapDashBoard = () => {
  return (
    <div className="flex items-center gap-[60px] xl:gap-20">
      {/* left part */}
      {panelsData.slice(2, 3).map((panel, index) => (
        <PanelTextDoc key={index} {...panel} />
      ))}
      {/* right part */}
      <div className="relative hidden w-full lg:block">
        <div className="flex gap-x-[18px]">
          {/* one */}
          <div className="w-full max-w-[261px] space-y-4">
            {chartPanel.slice(0, 3).map((chart, index) => (
              <div
                key={index}
                className={`animate_right relative aspect-[${chart.aspectRatio}]`}
              >
                <img
                  src={chart.imageUrl}
                  alt={chart.altText}
                  className="ml-auto shadow-10"
                />
              </div>
            ))}
          </div>
          {/* two */}
          <div className="mt-6 w-full max-w-[224px] space-y-4">
            {chartPanel.slice(3).map((chart, index) => (
              <div
                key={index}
                className={`animate_right relative aspect-[${chart.aspectRatio}]`}
              >
                <img
                  src={chart.imageUrl}
                  alt={chart.altText}
                  className="w-full h-full shadow-10"
                />
              </div>
            ))}
          </div>
        </div>
        {/* blur */}
        <div className="absolute -bottom-11 left-1/2 z-[-1] -translate-x-1/2">
          <img src={ChartGrid} alt="chartGrid" />
        </div>
        <div className="features-gradient-3 absolute left-1/2 top-1/2 z-[-1] h-[382px] w-full max-w-[382px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[62px]"></div>
        <div className="features-gradient-3 absolute left-1/2 top-1/2 z-[-1] h-[162px] w-full max-w-[162px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[62px]"></div>
      </div>
    </div>
  );
};

export default ChartMapDashBoard;
