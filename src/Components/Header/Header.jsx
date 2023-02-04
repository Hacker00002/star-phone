import "./header.css";
import logo from "../../assets/img/asaxiy-logo.svg";
import register from "../../assets/img/icons8-writer-male-96 (1).png";
import Category from "../Category/Category";
import { UserAuth } from "../../account/google";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../Pages/register";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const [users, setUsers] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
        setUsers(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div className="headerFather">
      <header className="header">
        <div className="container">
          <div className="header__father">
            <div className="logoIcon">
              <Link to={"/"}>
                <a href="/" className="logo__svg">
                  <img src={logo} alt="" />
                </a>
              </Link>
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
                  <Link to={"/Delivery"}>
                    <a href="/" className="nav__link">
                      <i class="fa-solid icons fa-truck-ramp-box"></i>
                      delivery
                    </a>
                  </Link>
                </li>
                <li className="nav__list-item">
                  <Link to={"/Location"}>
                    <a href="/" className="nav__link">
                      <i class="fa-solid icons fa-map-location-dot"></i>
                      address
                    </a>
                  </Link>
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

                {user?.displayName ? (
                  <div className="logout__father">
                    {/* <button
                      className="logout logout__fathers btn-15 logout"
                      onClick={handleSignOut}
                    >
                      <i class="fa-solid fa-right-from-bracket"></i>
                    </button>
                    <a href="/User" className="logout btn-15 logout">
                      <i class="fa-solid fa-user-tie"></i>
                    </a> */}
                  </div>
                ) : (
                  <li className="nav__list-items">
                    <Link to={"/Register"}>
                      <a href="/" className="logouts btn-15">
                        <img src={register} alt="" width={23} height={21.8} />
                      </a>
                    </Link>
                  </li>
                )}
                {users?.email ? (
                  <div className="logout__father">
                    <Link to={"/SignIn"}>
                      <a
                        href="/"
                        className="logout btn-15 logout"
                        onClick={handleSignOut}
                      >
                        <i class="fa-solid fa-right-from-bracket"></i>
                      </a>
                    </Link>
                    <Link to={"/User"}>
                      <a href="/" className="logout btn-15 logout">
                        <i class="fa-solid fa-user-tie"></i>
                      </a>
                    </Link>
                  </div>
                ) : (
                  <li className="nav__list-itemsTwo">
                    <Link to={"/Signin"}>
                      <a href="/" className="logoutsTwo btn-15">
                        <i class="fa-solid fa-right-to-bracket"></i>
                      </a>
                    </Link>
                  </li>
                )}
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
