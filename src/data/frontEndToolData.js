import { SiNextdotjs } from "react-icons/si";
import TechHtmlSvg from "../common/ToolsAndTechSvg/TechHtmlSvg";
import TechReactSvg from "../common/ToolsAndTechSvg/TechReactSvg";
import TechVue from "../common/ToolsAndTechSvg/TechVue";


export const frontEndToolData = [
  {
    name: "HTML + Tailwind",
    description: "TailAdmin HTML: Built-with Tailwind CSS, HTML and Alpine.js",
    buttonLabel: "Explore",
    icon: <TechHtmlSvg className="w-9 h-9" />,
  },
  {
    name: "React.js + Tailwind",
    description: "TailAdmin React: Built-with Tailwind CSS, React.js and TypeScript",
    buttonLabel: "Explore",
    icon: <TechReactSvg className="w-[39px] h-[38px]" />,
  },
  {
    name: "Next.js + Tailwind",
    description: "TailAdmin Next.js: Built-with Tailwind CSS, Next.js and TypeScript",
    buttonLabel: "Explore",
    icon: <SiNextdotjs size={38} className="text-black" />,
  },
  {
    name: "Vue.js + Tailwind",
    description: "TailAdmin Vue: Built-with Tailwind CSS and Vue.js",
    buttonLabel: "Explore",
    icon: <TechVue className="w-[39px] h-[38px]" />,
  },
];


