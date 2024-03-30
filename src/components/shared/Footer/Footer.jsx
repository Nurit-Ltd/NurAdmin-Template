import { aboutLinkData, useFullLinkData } from "../../../data/footerLinkData";
import FooterAbout from "./FooterAbout";
import FooterMail from "./FooterMail";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-[73.125rem] px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-10 xl:justify-between">
          <FooterAbout />
          <div className="max-w-[174px] sm:w-auto">
            <h3 className="mb-7.5 text-custom-lg font-medium text-secondary">
              Useful Links
            </h3>
            <ul className="flex flex-col gap-3">
              {useFullLinkData.map((items, index) => (
                <li key={index}>
                  <a
                    href={items.link}
                    target="_blank"
                    className="hover:text-primary"
                  >
                    {items.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-[174px] sm:w-auto">
            <h4 className="mb-7.5 text-custom-lg font-medium text-secondary">
              About
            </h4>
            <ul className="flex flex-col gap-3">
              {aboutLinkData.map((items, index) => (
                <li key={index}>
                  <a
                    href={items.link}
                    target="_blank"
                    className="hover:text-primary"
                  >
                    {items.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <FooterMail />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
