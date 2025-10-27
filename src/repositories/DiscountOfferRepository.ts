import type { DiscountOffer } from "../data/DiscountOffer";
import { discountTestData } from "../data/discountTestData";

// Shared array to prevent repeating data
let offers: DiscountOffer[] = [...discountTestData];

export class DiscountOfferRepository {
  getAll(): DiscountOffer[] {
    return offers;
  }

  add(offer: DiscountOffer): DiscountOffer | null {
    if (offers.some(o => o.title === offer.title)) return null;
    offers.push({ ...offer, id: offers.length + 1 });
    return offer;
  }

  delete(id: number): void {
    offers = offers.filter(o => o.id !== id);
  }
}
