import logo from '../../../assets/Website Logo.jpg';
import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Website Logo" className="logo" />
      <div className="header-right">
        <input type="text" placeholder="Search" className="search-bar" />
        <button>❤️ Favorites</button>
        <button>🛒 Cart</button>
      </div>
    </header>
  );
};