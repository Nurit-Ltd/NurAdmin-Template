import NextSvg from "../components/common/ToolsAndTechSvg/NextSvg";
import TechHtmlSvg from "../components/common/ToolsAndTechSvg/TechHtmlSvg";
import TechReactSvg from "../components/common/ToolsAndTechSvg/TechReactSvg";
import TechVue from "../components/common/ToolsAndTechSvg/TechVue";

export const frontEndToolAll =[
  {
    name: "HTML + Tailwind",
    description:
      "NurAdmin HTML: Built-with Tailwind CSS, HTML and Alpine.js",
    buttonLabel: "Explore",
    icon: TechHtmlSvg ,
  },
  {
    name: "React.js + Tailwind",
    description:
      "NurAdmin React: Built-with Tailwind CSS, React.js and TypeScript",
    buttonLabel: "Explore",
    icon: TechReactSvg ,
  },
  {
    name: "Next.js + Tailwind",
    description:
      "NurAdmin Next.js: Built-with Tailwind CSS, Next.js and TypeScript",
    buttonLabel: "Explore",
    icon: NextSvg ,
  },
  {
    name: "Vue.js + Tailwind",
    description: "NurAdmin Vue: Built-with Tailwind CSS and Vue.js",
    buttonLabel: "Explore",
    icon: TechVue ,
  },
]