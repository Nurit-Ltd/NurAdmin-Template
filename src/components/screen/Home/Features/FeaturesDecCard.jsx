import { featuresDecData } from "../../../../data/featuresDecData";

const FeaturesDecCard = () => {
  return (
    <div className="mt-13 grid grid-cols-1 gap-x-[30px] gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuresDecData.map((feature, index) => (
        <div
          key={index}
          className="animate_bottom  rounded-xl border border-garyBorder bg-white p-7 hover:shadow-[0px_20px_80px_0px_rgba(9,14,34,0.06)]"
        >
          <div className="flex items-center gap-5">
            {feature.icon && <feature.icon size={30} className="text-primary" />}
            <h4 className="text-lg font-medium text-secondary xl:text-22xl xl:leading-7.5">
              {feature.title}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesDecCard;
