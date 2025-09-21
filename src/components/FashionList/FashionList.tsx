// src/components/FashionList/FashionList.tsx
import { useState } from "react";
import "./FashionList.css";
import menShirtVideo from "../../assets/Men Shirt.mp4";
import MenTShirtVideo from "../../assets/Men T-Shirt.mp4";
import PantKidsVideo from "../../assets/Pant Kids.mp4";
import ShoesKidsVideo from "../../assets/ShoesKids.mp4";
import MenWatch from "../../assets/Men Watch.mp4";
import WomenHandbag from "../../assets/Women Handbag.mp4";
import WomenJewellery from "../../assets/Women Jewellery.mp4"

interface FashionItem {
  name: string;
  price: string;
  image?: string; 
  video?: string; 
}

interface Category {
  key: string;
  label: string;
  items: FashionItem[];
}

const categories: Category[] = [
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
      { name: "Handbag", price: "$60.00", video: WomenHandbag},
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

const FashionList = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="nav-links">
      {categories.map((category) => (
        <div key={category.key} className="dropdown">
          <button
            className="dropbtn"
            onClick={() => toggleMenu(category.key)}
          >
            {category.label}
          </button>
          {openMenu === category.key && (
            <div className="dropdown-content">
              {category.items.map((item, idx) => (
                <div key={idx} className="fashion-card">
                  {item.video ? (
                    <video className="fashion-video" autoPlay loop muted>
                      <source src={item.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={item.image} alt={item.name} />
                  )}
                  <h3>{item.name}</h3>
                  <p className="price">{item.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default FashionList;
