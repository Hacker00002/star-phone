import "./delivery.css";
import Delivery from "../../assets/gifs/f.gif";
import IconDelivery from "../../assets/DeliveryImgs/icons8-mega-sales-64.png";
import Required from "../DeliveryRequired/Required";

const DeliveryPage = () => {
  return (
    <div className="container">
      <div className="delivery__all">
        <div className="delivery__father">
          <div className="delivery__text">
            <h2>Delivery services</h2>
            <div className="text__services">
              <i class="fa-solid fa-truck-ramp-box"></i>
              <h3>Delivery time 08:00-23:00</h3>
            </div>
            <div className="text__services">
              <i class="fa-solid fa-city"></i>
              <h3>Delivery service only in Tashkent city</h3>
            </div>
            <div className="text__services">
              <img src={IconDelivery} alt="" />
              <h3>Delivery service is 100% free</h3>
            </div>
            <div className="text__services">
              <i class="fa-solid fa-road-circle-xmark"></i>
              <h3>
                If the product delivery time exceeds 24 hour, the delivery
                service will be free of charge
              </h3>
            </div>
          </div>
          <img className="delivery" src={Delivery} alt="" />
        </div>
        <Required />
      </div>
    </div>
  );
};

export default DeliveryPage;
