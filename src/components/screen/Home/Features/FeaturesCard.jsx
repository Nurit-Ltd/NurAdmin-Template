import { featuresData } from "../../../../data/featureData";

const FeaturesCard = () => {
  return (
    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
      {featuresData.map((feature, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="animate_bottom  rounded-xl border border-garyBorder bg-white p-7 hover:shadow-[0px_20px_80px_0px_rgba(9,14,34,0.06)]"
        >
          <div className="mb-7.5 text-primary">
            <feature.icon size={50} />
          </div>
          <h3 className="mb-3.5 text-xl font-semibold text-secondary  xl:text-24xl xl:leading-7.5">
            {feature.title}
          </h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesCard;
