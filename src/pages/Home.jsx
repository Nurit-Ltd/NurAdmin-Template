
import PanelPage from "../components/screen/Home/AdminPanel/PanelPage";
import AllPageComponent from "../components/screen/Home/AllPageComponents/AllPageComponent";
import BestApp from "../components/screen/Home/BestApp";
import DashBoardVariation from "../components/screen/Home/DashBVariation/DashBoardVariation";
import DownloadOption from "../components/screen/Home/DownloadOption";
import Features from "../components/screen/Home/Features/Features";
import FrontEndToolAll from "../components/screen/Home/FrontEndTools/FrontEndToolAll";
import HeroPart from "../components/screen/Home/Hero/HeroPart";
import PowerFullToolKit from "../components/screen/Home/PowerFullToolkit/PowerFullToolKit";


const Home = () => {
  return (
    <>
     <HeroPart />
     <FrontEndToolAll />
     <BestApp />
     <Features />
     <PanelPage />
     <DashBoardVariation />
     <AllPageComponent />
     <PowerFullToolKit />
     <DownloadOption />
    </>
  );
};

export default Home;