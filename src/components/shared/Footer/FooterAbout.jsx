
import { Link } from "react-router-dom";
import { footerAboutData } from "../../../data/footerLinkData";

const FooterAbout = () => {
  const { logoUrl, description, copyright, subLogoUrl, socialLinks, label } =
    footerAboutData;
  return (
    <div className="max-w-[400px]">
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
          <a href="#" className="w-[73px] h-[22px] flex items-center gap-1">
             <img src={subLogoUrl} alt="nur-it-logo" className="w-6 h-6 object-fill" />
              <span className="text-2xl font-bold text-black">NurIT</span>
          </a>
        </div>
        <div className="mt-9">
          <ul className="flex items-center gap-[22px]">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url} target="_blank" aria-label={label}>
                  <link.icon size={18} className="hover:text-secondary" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterAbout;
