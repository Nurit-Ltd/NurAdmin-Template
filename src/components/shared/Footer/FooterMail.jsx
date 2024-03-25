import { RiSendPlaneFill } from "react-icons/ri";

const FooterMail = () => {
  return (
    <div className="max-w-[20.375rem]">
      <div>
        <h4 className="mb-7.5 text-custom-lg font-medium text-secondary">
          Newsletter
        </h4>
        <p>Subscribe for the latest updates</p>
        <form className="mt-6" action="#">
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[236px] h-[46px] rounded-md border border-garyBorder px-5 py-2.5 text-black-4 outline-none focus:border-primary flex items-center justify-center  bg-gray-1"
            />

            <button
              type="submit"
              className="flex h-[46px] w-[46px] max-w-11.5 items-center justify-center rounded-md bg-primary text-white"
            >
              <RiSendPlaneFill size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FooterMail;
