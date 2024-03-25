import NextSvg from "../common/ToolsAndTechSvg/NextSvg";
import TechHtmlSvg from "../common/ToolsAndTechSvg/TechHtmlSvg";
import TechReactSvg from "../common/ToolsAndTechSvg/TechReactSvg";
import TechVue from "../common/ToolsAndTechSvg/TechVue";

export const frontEndToolAll =[
  {
    name: "HTML + Tailwind",
    description:
      "TailAdmin HTML: Built-with Tailwind CSS, HTML and Alpine.js",
    buttonLabel: "Explore",
    icon: TechHtmlSvg ,
  },
  {
    name: "React.js + Tailwind",
    description:
      "TailAdmin React: Built-with Tailwind CSS, React.js and TypeScript",
    buttonLabel: "Explore",
    icon: TechReactSvg ,
  },
  {
    name: "Next.js + Tailwind",
    description:
      "TailAdmin Next.js: Built-with Tailwind CSS, Next.js and TypeScript",
    buttonLabel: "Explore",
    icon: NextSvg ,
  },
  {
    name: "Vue.js + Tailwind",
    description: "TailAdmin Vue: Built-with Tailwind CSS and Vue.js",
    buttonLabel: "Explore",
    icon: TechVue ,
  },
]