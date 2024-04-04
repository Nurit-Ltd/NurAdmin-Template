import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { allPageComponent } from "../../../../data/allPageComponent";

const DashBoardVariant = () => {
  return (
    <>
      {allPageComponent.map((allData, index) => (
        <div
          key={index}
          className="-mx-4 flex flex-wrap border-b border-[#E9EEF3] pb-7 last-of-type:border-b-0 pt-15 first-of-type:pt-0"
        >
          {/* left */}
          <div className="w-full px-2 xl:w-1/4">
            <div className="mb-8">
              <h3 className="mb-3.5 text-xl font-semibold text-secondary lg:text-28xl lg:leading-10">
                {allData.title}
              </h3>
              <div className="flex items-center gap-3">
                <p className="font-medium">{allData.pOne}</p>
                <span>
                  <IoIosArrowRoundForward />
                </span>
                <p className="font-medium">{allData.pTwo}</p>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="-mx-4 flex w-full flex-wrap px-2 xl:w-3/4">
            {allData.imageCard.map((imgData, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="w-full px-2 sm:w-1/2 lg:w-1/3"
              >
                <Link
                  to={imgData.link}
                  target="_blank"
                  className="animate_bottom group mb-8 block rounded-[20px] p-3 hover:bg-hoverBg"
                >
                  <div className="relative w-full h-[190px] aspect-[708/480]">
                    <img
                      src={imgData.imageUrl}
                      alt={`variant-${index + 1}`}
                      className="rounded-[10px] border border-grayBorderVar w-full h-full object-fill"
                    />
                  </div>
                  <h4 className="mt-4 font-medium text-secondary group-hover:text-primary ">
                    {imgData.imgName}
                  </h4>
                  <p className="mt-1 text-sm">{imgData.imgTitle}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default DashBoardVariant;
