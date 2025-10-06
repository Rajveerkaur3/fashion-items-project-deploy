import { Header } from "../Layout/Header/Header";
import { Body } from "../Layout/Body/Body";
import Nav from "../NavBar/Nav";
import { Footer } from "../Layout/Footer/Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Body />
      <Footer />
    </div>
  );
};