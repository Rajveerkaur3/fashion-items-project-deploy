import { useState } from "react";
import "./FashionList.css";
import { categories } from "../../data/categories";

const FashionList = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }));
  

  return (
    <div>
      
      <input
        type="text"
        placeholder="Search fashion items"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <nav className="nav-links">
        {filteredCategories.map((category) => (
          <div key={category.key} className="dropdown">
            <button
              className="dropbtn"
              onClick={() => toggleMenu(category.key)}
            >
              {category.label}
            </button>
            {openMenu === category.key && (
              <div className="dropdown-content">
                {category.items.map((item) => (
                  <div key={item.name} className="fashion-card">
                    {item.video ? (
                      <video className="fashion-video" autoPlay loop muted>
                        <source src={item.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img src={item.image} alt={item.name} />
                    )}
                    <h3>{item.name}</h3>
                    <p className="price">{item.price}</p>
                    <button>❤️ Add to Favorites</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default FashionList;
