import "./footer.css";
import icon1 from "../../assets/FooterLogo/logo1.svg";
import icon2 from "../../assets/FooterLogo/logo2.svg";
import icon3 from "../../assets/FooterLogo/logo3.svg";
import icon4 from "../../assets/FooterLogo/logo4.svg";
import uzCard from "../../assets/logo_payments/uzcard.png";
import { languageContext } from "../../language/languageContext";
import Translation from "../../language/language.json";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

const FooterPage = () => {
  let date = new Date().getFullYear();
  const { lang, setLanguage } = useContext(languageContext);
  const [content, setContent] = useState({});
  useEffect(() => {
    if (lang == "English") {
      setContent(Translation.English);
    } else if (lang == "Russian") {
      setContent(Translation.Russian);
    } else if (lang == "Uzbek") {
      setContent(Translation.Uzbek);
    }
  });
  return (
    <footer id="footer">
      <div className="container">
        <div className="about__footer">
          <div className="footer__cards">
            <div className="footer__card1">
              <img src={icon1} alt="" />
              <div className="icon__text">
                <h4>{content?.Footer?.Market1}</h4>
                <p>{content?.Footer?.Market2}</p>
              </div>
            </div>
            <div className="footer__card1">
              <img src={icon2} alt="" />
              <div className="icon__text">
                <h4>{content?.Footer?.Market3}</h4>
                <p>{content?.Footer?.Market4}</p>
              </div>
            </div>
            <div className="footer__card1">
              <img src={icon3} alt="" />
              <div className="icon__text">
                <h4>{content?.Footer?.Market5}</h4>
                <p>{content?.Footer?.Market6}</p>
              </div>
            </div>
            <div className="footer__card1">
              <img src={icon4} alt="" />
              <div className="icon__text">
                <h4>{content?.Footer?.Market7}</h4>
                <p>{content?.Footer?.Market8}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__links">
          <div className="footer__lists">
            <ul className="footer__list">
              <h2>{content?.FooterLinks?.link1}</h2>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  {content?.FooterLinks?.link2}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  {content?.FooterLinks?.link3}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  {content?.FooterLinks?.link4}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  {content?.FooterLinks?.link5}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  {content?.FooterLinks?.link6}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  {content?.FooterLinks?.link7}
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <h2>{content?.FooterLinks?.link8}</h2>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-instagram"></i>
                  <span>5</span> {content?.FooterLinks?.link9}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-facebook"></i>
                  <span>5</span> {content?.FooterLinks?.link10}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-youtube"></i>
                  <span>5</span>
                  {content?.FooterLinks?.link11}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-telegram"></i>
                  <span>5</span>
                  {content?.FooterLinks?.link12}
                </a>
              </li>
              <li className="footer__list-item">
                <a href="/" className="footer__link">
                  <i class="fa-brands fa-twitter"></i>
                  <span>5</span>
                  {content?.FooterLinks?.link13}
                </a>
              </li>
            </ul>
            <ul className="footer__list">
              <h2>{content?.FooterLinks?.link14}</h2>
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
        <div className="logoPayments">
          <img
            src="https://asaxiy.uz/custom-assets/images/apelsin-logo.svg"
            width={70}
            alt=""
          />
          <img src={uzCard} width={60} alt="" />
          <img
            src="https://asaxiy.uz/custom-assets/images/payme.svg"
            width={70}
            alt=""
          />
          <img
            src="https://asaxiy.uz/custom-assets/images/humo.svg"
            width={55}
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1599px-Visa_Inc._logo.svg.png?20170118154621"
            width={70}
            alt=""
          />
          <img
            src="https://asaxiy.uz/custom-assets/images/mastercard.svg"
            width={60}
            alt=""
          />
        </div>
        <p className="text__company">
          <p>2022-{date}</p>
          {content?.FooterLinks?.link15}
        </p>
      </div>
    </footer>
  );
};

export default FooterPage;
