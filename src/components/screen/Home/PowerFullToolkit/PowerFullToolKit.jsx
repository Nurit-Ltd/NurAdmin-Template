import PluginsBlurSvg from "../../../../common/PluginsBlurSvg";
import PluginsSvg from "../../../../common/PluginsSvg";
import SectionTitle from "../../../shared/SectionTitle";
import PluginsCard from "./PluginsCard";

const PowerFullToolKit = () => {
  return (
    <section className="relative z-[1] overflow-hidden bg-grayBgSub py-18 sm:py-23 xl:py-27.5">
      {/* title */}
      <div className="animate_bottom mx-auto max-w-[860px] px-4 text-center sm:px-8 xl:px-0">
        <SectionTitle
          title="Powerful Toolkit"
          description="Customized Plugins and Add-ons"
        />
      </div>
      {/* main part */}
      <PluginsCard />
      <div className="absolute bottom-0 left-0 right-0 -z-10">
        <PluginsSvg />
      </div>
      <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
        <PluginsBlurSvg />
      </div>
    </section>
  );
};

export default PowerFullToolKit;
