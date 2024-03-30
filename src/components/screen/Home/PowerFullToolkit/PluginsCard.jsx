import { pluginsData } from "../../../../data/pluginsData";

const PluginsCard = () => {
  return (
    <div className="mx-auto mt-15 max-w-[73.125rem] px-4 sm:px-8 xl:px-0">
      <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
        {pluginsData.map((data)=>(
            <div data-aos="zoom-in" key={data.id} className="animate_bottom  rounded-xl border border-garyBorder bg-white p-4 hover:shadow-[0px_20px_80px_0px_rgba(9,14,34,0.06)] sm:p-7.5">
            <h3 className="mb-3 text-22xl leading-7.5 font-semibold text-secondary">
              {data.title}
            </h3>
            <p>
              {data.description}
            </p>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default PluginsCard;
