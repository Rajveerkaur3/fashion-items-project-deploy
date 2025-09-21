import "./DiscountOffers.css";
import shirtImg from "../../assets/shirt.jpg";
import shoesImg from "../../assets/shoes.jpg";
import handbagImg from "../../assets/handbag.jpg";
import watchImg from "../../assets/watch.jpg";

const offers = [
  { id: 1, offer: "10% off on Shirts", img: shirtImg },
  { id: 2, offer: "Buy 1 Get 1 Free Shoes", img: shoesImg },
  { id: 3, offer: "20% off on Handbags", img: handbagImg },
  { id: 4, offer: "15% off on Watches", img: watchImg }
];

const DiscountOffers = () => {
  return (
    <section className="discount-offers">
      <h2>Special Discount Offers!!</h2>
      <div className="offers-container">
        {offers.map((item) => (
          <div key={item.id} className="offer-card">
            <img src={item.img} alt={item.offer} className="offer-img" />
            <p>{item.offer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscountOffers;
