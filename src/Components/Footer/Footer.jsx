import "./footer.css";
import icon1 from "../../assets/FooterLogo/logo1.svg";
import icon2 from "../../assets/FooterLogo/logo2.svg";
import icon3 from "../../assets/FooterLogo/logo3.svg";
import icon4 from "../../assets/FooterLogo/logo4.svg";

const FooterPage = () => {
  let date = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <div className="about__footer">
          <div className="footer__cards">
            <div className="footer__card1">
              <img src={icon1} alt="" />
              <div className="icon__text">
                <h4>No more going to the market</h4>
                <p>We have competitive prices and home delivery</p>
              </div>
            </div>
            <div className="footer__card1">
              <img src={icon2} alt="" />
              <div className="icon__text">
                <h4>Fast delivery</h4>
                <p>Our service will surprise you</p>
              </div>
            </div>
            <div className="footer__card1">
              <img src={icon3} alt="" />
              <div className="icon__text">
                <h4>Convenience for you</h4>
                <p>
                  Fast processing and return guarantee in case of malfunction
                </p>
              </div>
            </div>
            <div className="footer__card1">
              <img src={icon4} alt="" />
              <div className="icon__text">
                <h4>Installment plan</h4>
                <p>Без предоплаты на 3, 6, 9 и 12 месяцев</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__lists">
            <ul className="footer__list">
              <h2>Information</h2>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  Term payment terms
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  General rules of purchase on the basis of installment payment
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  How to order?
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  Public Offer (User Agreement)
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  Delivery of goods and types of payment
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  Cancellation of order and return of goods
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <h2>We are on social networks:</h2>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-instagram"></i>
                  <span>5</span> Instagram
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-facebook"></i>
                  <span>5</span> Facebook
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-youtube"></i>
                  <span>5</span>Youtube
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-telegram"></i>
                  <span>5</span>Telegram
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-twitter"></i>
                  <span>5</span>Twitter
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <h2>Contact us</h2>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-solid fa-phone-volume"></i>
                  <span>5</span> +(998)99 844-55-64
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-solid fa-envelope"></i>
                  <span>5</span> info@cellus.uz
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-solid fa-map-location-dot"></i>
                  <span>5</span> Beruniy Eco market
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text__company">
          <p>2022-{date}</p>
          Online store <strong>Cellus.uz</strong> household appliances and
          others. Product delivery is carried out in all regions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
