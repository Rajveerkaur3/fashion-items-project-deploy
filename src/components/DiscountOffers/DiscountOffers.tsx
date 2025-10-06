import { useState } from "react";
import "./DiscountOffers.css";
import shirtImg from "../../assets/shirt.jpg";
import shoesImg from "../../assets/shoes.jpg";
import handbagImg from "../../assets/handbag.jpg";
import watchImg from "../../assets/watch.jpg";

const offers = [
  { id: 1, offer: "10% off on Shirts", img: shirtImg },
  { id: 2, offer: "Buy 1 Get 1 Free Shoes", img: shoesImg },
  { id: 3, offer: "20% off on Handbags", img: handbagImg },
  { id: 4, offer: "15% off on Watches", img: watchImg },
];

const DiscountOffers: React.FC = () => {
  const [savedCoupons, setSavedCoupons] = useState<string[]>([]);

  // Save coupon
  const handleSave = (coupon: string) => {
    if (!savedCoupons.includes(coupon)) {
      setSavedCoupons([...savedCoupons, coupon]);
    }
  };

  // Remove coupon
  const handleRemove = (coupon: string) => {
    setSavedCoupons(savedCoupons.filter((c) => c !== coupon));
  };

  return (
    <section className="discount-offers">
      <h2>Special Discount Offers!!</h2>

      <div className="offers-container">
        {offers.map((item) => (
          <div key={item.id} className="offer-card">
            <img src={item.img} alt={item.offer} className="offer-img" />
            <p>{item.offer}</p>
            <button onClick={() => handleSave(item.offer)} className="offer-btn">
              Save Coupon
            </button>
          </div>
        ))}
      </div>

      {savedCoupons.length > 0 && (
        <div className="saved-coupons">
          <h3>Saved Coupons:</h3>
          <ul>
            {savedCoupons.map((coupon, idx) => (
              <li key={idx}>
                {coupon}
                <button onClick={() => handleRemove(coupon)} className="remove-btn">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default DiscountOffers;