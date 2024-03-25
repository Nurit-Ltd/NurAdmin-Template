

const PanelTextDoc = ({subTitle,title,pOneTitle,pTwoTitle,pOneDec,pTwoDec}) => {
  return (
    <div className="animate_left w-full max-w-[570px]">
        <h4 className="mb-2.5 text-lg font-medium text-primary">
          {subTitle}
        </h4>
        <h3 className="text-2xl font-bold text-secondary xl:text-40xl xl:leading-48">
         {title}
        </h3>
        <div className="mt-[38px]">
          <div className="mb-9">
            <h5 className="mb-1.5 text-2xl font-semibold text-secondary">
              {pOneTitle}
            </h5>
            <p className="xl:w-10/12">
              {pOneDec}
            </p>
          </div>
          <div>
            <h5 className="mb-1.5 text-2xl font-semibold text-secondary">
              {pTwoTitle}
            </h5>
            <p className="xl:w-10/12">
              {pTwoDec}
            </p>
          </div>
        </div>
      </div>
  );
};

export default PanelTextDoc;