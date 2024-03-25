import FooterSubLogoSvg from "../../../common/FooterSubLogoSvg";
import { footerAboutData } from "../../../data/footerLinkData";

const FooterAbout = () => {
  const { logoUrl, description, copyright, subLogoUrl, socialLinks } =
    footerAboutData;
  return (
    <div className="max-w-[25rem]">
      <div>
        <a
          href="/"
          className="flex gap-3 items-center mb-[1.875rem] w-[172px] h-8"
        >
          <img src={logoUrl} alt="logo" className="" />
          <span className="text-28xl font-semibold text-black">NurAdmin</span>
        </a>

        <p className="max-w-[400px]">{description}</p>
        <p className="mb-0.5 mt-10">{copyright}</p>
        <div className="mt-4 flex items-center gap-2.5">
          <p className="text-sm font-medium">A product by</p>
          <a href="#" className="w-[73px] h-[22px]">
            <FooterSubLogoSvg src={subLogoUrl} />
          </a>
        </div>
        <div className="mt-9">
          <ul className="flex items-center gap-[22px]">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank">
                  <link.icon size={18} className="hover:text-secondary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterAbout;