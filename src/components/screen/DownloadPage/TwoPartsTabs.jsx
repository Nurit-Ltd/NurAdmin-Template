import Basic from "./Basic";
import Premium from "./Premium";

const TwoPartsTabs = ({ bAndP }) => {
    const {basic,premium,basicTitle,premiumTitle,icon,downloadTitle} = bAndP
  return (
    <div className="mt-15 flex flex-col gap-8 sm:flex-row sm:justify-center xl:gap-11">
      <Basic basic={basic} basicTitle={basicTitle} icon={icon} downloadTitle={downloadTitle} />
      <Premium premium={premium} premiumTitle={premiumTitle} />
    </div>
  );
};

export default TwoPartsTabs;
