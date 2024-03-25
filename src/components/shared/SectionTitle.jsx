
const SectionTitle = ({title, description}) => {
  return (
    <div>
      <span className="font-heading mb-5 inline-block text-24xl leading-7.5 font-medium text-primary">
          {title}
        </span>
        <h2 className="text-3xl font-semibold text-secondary sm:text-4xl xl:text-44xl xl:leading-60">
          {description}
        </h2>
    </div>
  );
};

export default SectionTitle;