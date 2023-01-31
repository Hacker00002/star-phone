import "./header.css";
import logo from "../../assets/img/asaxiy-logo.svg";
import Category from "../Category/Category";

const Header = () => {
  return (
    <div className="headerFather">
      <header className="header">
        <div className="container">
          <div className="header__father">
            <div className="logoIcon">
              <a href="/admin" className="logo__svg">
                <img src={logo} alt="" />
              </a>
              <div className="search">
                <i class="fa-solid icon__search fa-magnifying-glass"></i>
                <input
                  type="search"
                  placeholder="Search..."
                  className="searchInput"
                />
              </div>
            </div>
            <nav className="navbar">
              <ul className="nav__list">
                <li className="nav__list-item">
                  <a href="#" className="nav__link">
                    <i class="fa-regular icons fa-credit-card"></i>
                    payment
                  </a>
                </li>
                <li className="nav__list-item">
                  <a href="#" className="nav__link">
                    <i class="fa-solid icons fa-truck-ramp-box"></i>
                    delivery
                  </a>
                </li>
                <li className="nav__list-item">
                  <a href="#" className="nav__link">
                    <i class="fa-solid icons fa-map-location-dot"></i>
                    address
                  </a>
                </li>
                <li className="nav__list-item">
                  <a href="#" className="nav__link">
                    <i class="fa-solid icons fa-cart-shopping"></i>
                    basket
                  </a>
                </li>
                <li className="nav__list-item">
                  <a href="#" className="nav__link">
                    <i class="fa-regular icons fa-heart"></i>
                    Favorites
                  </a>
                </li>
                <li className="nav__list-item">
                  <a href="#" className="nav__link">
                    <i class="fa-solid icons fa-globe"></i>
                    language
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Category />
      </header>
    </div>
  );
};

export default Header;
