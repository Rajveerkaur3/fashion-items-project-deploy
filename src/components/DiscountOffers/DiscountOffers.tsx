// src/components/DiscountOffers/DiscountOffers.tsx
import "./DiscountOffers.css";

const offers = [
  { id: 1, offer: "10% off on Shirts" },
  { id: 2, offer: "Buy 1 Get 1 Free Shoes" },
  { id: 3, offer: "20% off on Handbags" },
];

const DiscountOffers = () => {
  return (
    <section className="discount-offers">
      <h2>Special Discount Offers</h2>   
      {offers.map((item) => (
        <p key={item.id}>{item.offer}</p>
      ))}
    </section>
  );
};

export default DiscountOffers;
