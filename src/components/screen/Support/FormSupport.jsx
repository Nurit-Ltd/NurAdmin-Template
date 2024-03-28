const FormSupport = () => {
  return (
    <div data-aos="fade-up" className="animate_bottom  mt-13 rounded-xl border border-garyBorder bg-white p-4 shadow-md sm:p-8 lg:p-13">
      <form action="#">
        <div className="mb-5 flex flex-col gap-5 sm:flex-row sm:gap-9">
          <div className="w-full">
            <label htmlFor="" className="mb-2.5 block text-secondary ">
              Full name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full rounded-[7px] border border-garyBorder bg-grayBgSub px-5 py-3 outline-none placeholder:text-placeText focus:border-primary "
            />
          </div>
          <div className="w-full">
            <label htmlFor="" className="mb-2.5 block text-secondary ">
              Transaction ID
            </label>
            <input
              type="text"
              placeholder="Enter your Transaction ID"
              className="w-full rounded-[7px] border border-garyBorder bg-grayBgSub px-5 py-3 outline-none placeholder:text-placeText focus:border-primary "
            />
          </div>
        </div>
        <div className="mb-5 w-full">
          <label htmlFor="" className="mb-2.5 block text-secondary ">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-[7px] border border-garyBorder bg-grayBgSub px-5 py-3 outline-none placeholder:text-placeText focus:border-primary"
          />
        </div>
        <div className="mb-7.5 w-full">
          <label htmlFor="" className="mb-2.5 block text-secondary ">
            Message
          </label>
          <textarea
            placeholder="Type your message"
            name="msg"
            rows="6"
            className="w-full rounded-[7px] border border-garyBorder bg-grayBgSub px-5 py-3 outline-none placeholder:text-placeText focus:border-primary"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="rounded-[7px] bg-primary px-10 py-3.5 font-medium text-white">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSupport;
