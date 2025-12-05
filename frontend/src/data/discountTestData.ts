import type { DiscountOffer } from "./DiscountOffer";
import shirtImg from "../assets/shirt.jpg";
import shoesImg from "../assets/shoes.jpg";
import handbagImg from "../assets/handbag.jpg";
import watchImg from "../assets/watch.jpg";

export const discountTestData: DiscountOffer[] = [
  { id: 1, title: "Shirts", img: shirtImg, discount: "10% off" },
  { id: 2, title: "Shoes", img: shoesImg, discount: "Buy 1 Get 1 Free" },
  { id: 3, title: "Handbags", img: handbagImg, discount: "20% off" },
  { id: 4, title: "Watches", img: watchImg, discount: "15% off" }
];
