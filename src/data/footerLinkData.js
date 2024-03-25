import { FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";
import footerLogo from "../assets/logo-light-footer.svg";

export const useFullLinkData = [
  {
    title: "Documentation",
    link: "https://example.com/documentation",
  },
  {
    title: "Download Pro Update",
    link: "https://example.com/download-pro-update",
  },
  {
    title: "Download",
    link: "https://example.com/download",
  },
  {
    title: "Update Logs",
    link: "https://example.com/update-logs",
  },
  {
    title: "License",
    link: "https://example.com/license",
  },
];
export const aboutLinkData = [
  {
    title: "Privacy Policy",
    link: "https://example.com/privacy-policy",
  },
  {
    title: "Refund Policy",
    link: "https://example.com/refund-policy",
  },
  {
    title: "Community",
    link: "https://example.com/community",
  },
  {
    title: "Support",
    link: "https://example.com/support",
  },
  {
    title: "Current Version : 1.3.x",
    link: "https://example.com/current-version-1-3-x",
  },
];

export const footerAboutData = {
  logoUrl: footerLogo,
  description:
    "Free and Open-Source Tailwind CSS Admin Dashboard Template, now available for - HTML, React, Next.js and Vue",
  copyright: "© 2024 TailAdmin - All Rights Reserved.",
  subLogoUrl: "path_to_sub_logo",
  socialLinks: [
    { icon: FaDiscord, url: "#" },
    { icon: FaXTwitter, url: "#" },
    { icon: FaGithub, url: "#" },
  ],
};
