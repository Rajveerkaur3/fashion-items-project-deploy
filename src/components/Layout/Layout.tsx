import { Header } from "../Layout/Header/Header";
import { Body } from "../Layout/Body/Body";
import { Footer } from "../Layout/Footer/Footer";
import Nav from "../NavBar/Nav"; 

export const Layout = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
