import { IoEye } from "react-icons/io5";
import { variationCardData } from "../../../../data/variationCardData";

const VariationCard = () => {
  return (
    <div className="mx-auto mt-15 max-w-[73.125rem] px-4 sm:px-8 xl:px-0">
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-[30px] xl:gap-[50px]">
        {variationCardData.map((variation, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="animate_bottom rounded-xl bg-white px-4 pb-6 pt-4 text-center shadow-2 duration-300 ease-in hover:shadow-[0px_20px_80px_0px_rgba(9,14,34,0.06)]"
          >
            <div className="group relative overflow-hidden rounded-md border border-grayBorderVar">
              <div className="relative aspect-[708/480] w-full">
                <img
                  src={variation.imageUrl}
                  alt={`variation-${index + 1}`}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-0 w-0 items-center justify-center rounded-md bg-secondary/70 opacity-0 duration-300 ease-in group-hover:h-full group-hover:w-full group-hover:opacity-100">
                <a
                  href="https://nur-admin-dashboard.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-[7px] bg-white px-6 py-3 font-medium text-primary shadow-1 hover:bg-bgVariations"
                >
                  <IoEye /> Preview
                </a>
              </div>
            </div>
            <h3 className="font-inter mb-0.5 mt-5 text-lg font-semibold text-secondary">
              <a href="#">{variation.title}</a>
            </h3>
            <p>{variation.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VariationCard;
