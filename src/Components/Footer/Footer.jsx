import "./footer.css";
import icon1 from "../../assets/FooterLogo/logo1.svg";
import icon2 from "../../assets/FooterLogo/logo2.svg";
import icon3 from "../../assets/FooterLogo/logo3.svg";
import icon4 from "../../assets/FooterLogo/logo4.svg";

const FooterPage = () => {
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
      </div>
    </footer>
  );
};

export default FooterPage;
