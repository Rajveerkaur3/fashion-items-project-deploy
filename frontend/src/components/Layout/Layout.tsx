import { Outlet } from "react-router-dom";
import { Footer } from "../Layout/Footer/Footer";
import Nav from "../NavBar/Nav"; 


export const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};
