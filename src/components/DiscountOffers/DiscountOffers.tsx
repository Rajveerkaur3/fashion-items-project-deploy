import { useState, useEffect } from "react";
import "./DiscountOffers.css";
import { DiscountOfferRepository } from "../../repositories/DiscountOfferRepository";
import type { DiscountOffer } from "../../data/DiscountOffer";

const DiscountOffers: React.FC = () => {
  const repo = new DiscountOfferRepository();
  const [offers, setOffers] = useState<DiscountOffer[]>([]);
  const [savedCoupons, setSavedCoupons] = useState<DiscountOffer[]>([]);

  // Load initial offers from repository
  useEffect(() => {
    setOffers(repo.getAll());
  }, []);

  // Save coupon
  const handleSave = (offer: DiscountOffer) => {
    if (!savedCoupons.some(c => c.id === offer.id)) {
      setSavedCoupons([...savedCoupons, offer]);
    }
  };

  // Remove coupon from saved list
  const handleRemove = (id: number) => {
    setSavedCoupons(savedCoupons.filter(c => c.id !== id));
  };

  return (
    <section className="discount-offers">
      <h2>Special Discount Offers!</h2>

      <div className="offers-container">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-card">
            <img src={offer.img} alt={offer.title} className="offer-img" />
            <p>{offer.discount} on {offer.title}</p>
            <button onClick={() => handleSave(offer)} className="offer-btn">
              Save Coupon
            </button>
          </div>
        ))}
      </div>

      {savedCoupons.length > 0 && (
        <div className="saved-coupons">
          <h3>Saved Coupons:</h3>
          <ul>
            {savedCoupons.map((coupon) => (
              <li key={coupon.id}>
                {coupon.discount} on {coupon.title}
                <button onClick={() => handleRemove(coupon.id)} className="remove-btn">
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