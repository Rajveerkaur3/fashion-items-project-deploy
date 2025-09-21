import websiteVideo from "../../../assets/Website Video.mp4";
import FashionList from "../../FashionList/FashionList";
import { AboutUs } from "../../Page sections/AboutUs";
import DiscountOffers from "../../DiscountOffers/DiscountOffers";
import "./Body.css";


export const Body = () => {
  return (
    <main>
      <div className="hero-video">
        <video className="logo-video" autoPlay loop muted>
          <source src={websiteVideo} type="video/mp4" />
        </video>
      </div>

      <FashionList />
       <AboutUs />
      <DiscountOffers />
      
    </main>
  );
};
    
