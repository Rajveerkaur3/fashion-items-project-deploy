import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home</li>
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <input type="text" placeholder="Search" className="search-bar" />
        <button>❤️ Favorites</button>
        <button>🛒 Cart</button>
      </div>
    </header>
  );
};
