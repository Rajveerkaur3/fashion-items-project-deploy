import menShirtVideo from "../assets/Men Shirt.mp4";
import MenTShirtVideo from "../assets/Men T-Shirt.mp4";
import PantKidsVideo from "../assets/Pant Kids.mp4";
import ShoesKidsVideo from "../assets/ShoesKids.mp4";
import MenWatch from "../assets/Men Watch.mp4";
import WomenHandbag from "../assets/Women Handbag.mp4";
import WomenJewellery from "../assets/Women Jewellery.mp4";


export interface FashionItem {
  name: string;
  price: string;
  image?: string;
  video?: string;
}

export interface Category {
  key: string;
  label: string;
  items: FashionItem[];
}

export const categories: Category[] = [
  {
    key: "men",
    label: "Men",
    items: [
      { name: "Shirt", price: "$25.00", video: menShirtVideo },
      { name: "T-Shirt", price: "$20.00", video: MenTShirtVideo },
      { name: "Watch", price: "$50.00", video: MenWatch },
    ],
  },
  {
    key: "women",
    label: "Women",
    items: [
      { name: "Jewellery", price: "$500.00", video: WomenJewellery },
      { name: "Handbag", price: "$60.00", video: WomenHandbag },
    ],
  },
  {
    key: "kids",
    label: "Kids",
    items: [
      { name: "Pant Kids", price: "$500.00", video: PantKidsVideo },
      { name: "Shoes Kids", price: "$300.00", video: ShoesKidsVideo },
    ],
  },
];
