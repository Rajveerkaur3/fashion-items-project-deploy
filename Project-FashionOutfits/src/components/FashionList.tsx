// src/components/FashionList.tsx
import './FashionList.css';

interface FashionCategory {
  name: string;
  items: string[];
}

const categories: FashionCategory[] = [
  {
    name: 'Tops',
    items: ['T-shirts', 'Shirts', 'Blouses', 'Tank tops', 'Crop tops', 'Sweaters', 'Hoodies', 'Cardigans', 'Tunics']
  },
  {
    name: 'Bottoms',
    items: ['Pants', 'Jeans', 'Leggings', 'Shorts', 'Skirts', 'Sweatpants', 'Trousers']
  },
  {
    name: 'Dresses & One-Pieces',
    items: ['Casual dresses', 'Evening gowns', 'Jumpsuits', 'Rompers']
  },
  {
    name: 'Outerwear / Jackets',
    items: ['Coats', 'Jackets', 'Blazers', 'Leather jackets', 'Trench coats', 'Windbreakers', 'Parkas']
  },
  {
    name: 'Footwear',
    items: ['Sneakers', 'Sandals', 'Boots', 'Heels', 'Flats', 'Loafers', 'Slippers', 'Sports shoes']
  },
  {
    name: 'Accessories',
    items: ['Bags: handbags, backpacks, clutches', 'Jewelry: necklaces, earrings, bracelets', 'Belts', 'Sunglasses', 'Watches', 'Hats', 'Caps', 'Scarves', 'Gloves']
  },
  {
    name: 'Undergarments & Sl
    eepwear',
    items: ['Bras', 'Panties', 'Boxers', 'Briefs', 'Pajamas', 'Nightgowns', 'Robes', 'Socks', 'Tights', 'Leggings']
  },
  {
    name: 'Sports / Activewear',
    items: ['Gym shorts', 'Sports bras', 'Sweatshirts', 'Yoga pants', 'Tracksuits', 'Running shoes']
  },
  {
    name: 'Seasonal / Weather-Specific',
    items: ['Swimwear', 'Bikinis', 'Cover-ups', 'Raincoats', 'Umbrellas', 'Snow boots', 'Thermal wear', 'Winter gloves']
  },
  {
    name: 'Miscellaneous / Others',
    items: ['Tech fashion: smartwatches, wearable tech', 'Fashion masks', 'Belts with accessories', 'Costume pieces', 'Special event outfits']
  }
];

const FashionList = () => {
  return (
    <div className="fashion-list">
      {categories.map((category, index) => (
        <section key={index} className="category">
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default FashionList;
