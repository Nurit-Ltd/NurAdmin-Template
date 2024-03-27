import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";


const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      {/* main */}
      <main>
        <Outlet />
        
      </main>

      {/* footer */}
      <footer>
         <Footer />
      </footer>
    </>
  );
};

export default Layout;