import "./location.css";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import operator from "../../assets/img/icons8-operator-100.png";
import Maps from "../../google-maps/Maps";

const Location = () => {
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const emailText = useRef(null);
  const telText = useRef(null);

  const handleEmail = (e) => {
    let value = e.target.value;
    setEmail(value);
    if (value.length == 40) {
      emailText.current.focus();
    }
  };

  const handlePhone = (e) => {
    let value = e.target.value;
    setTel(value);
    if (value.length == 13) {
      telText.current.focus();
    }
  };

  const notify = () => {
    toast.success("Product added successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    notify.reset();
  };
  return (
    <div className="container">
      <div className="all_fathers-contact">
        <div className="contact">
          <div className="contact__top">
            <div className="contact__text">
              <h2>
                Contact us
                <img src={operator} alt="" />
              </h2>
              <p>
                To send us a message, fill in the necessary fields, fields are
                required
              </p>
            </div>
            <form
              action="https://formspree.io/f/moqzjrde"
              method="POST"
              id="contact"
              onSubmit={notify}
            >
              <div className="contacts">
                <i class="fa-solid fa-envelope-open-text"></i>
                <input
                  onChange={handleEmail}
                  value={email}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="contacts">
                <i class="fa-solid fa-phone-volume"></i>
                <input
                  ref={emailText}
                  onChange={handlePhone}
                  value={tel}
                  type="tel"
                  name="tel"
                  placeholder="Phone number to contact you +99897 400 00 00"
                  required
                />
              </div>
              <div className="contacts">
                <i class="fa-brands fa-solid fa-telegram"></i>
                <input
                  ref={telText}
                  type="text"
                  name="text"
                  placeholder="What is your Telegram username?"
                />
              </div>
              <div className="contacts">
                <i class="fa-solid fa-map-location-dot"></i>
                <input
                  type="text"
                  name="text"
                  placeholder="Your residential address"
                />
              </div>
              <div className="contact__btn">
                <button className="logouts btn__two btn-15" type="submit">
                  Send completed information
                </button>
              </div>
            </form>
          </div>
          <div className="img__contact">
            <img
              src="https://asaxiy.uz/custom-assets/images/tracking.svg"
              alt=""
              width={650}
            />
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        <div className="maps__text">
          <h2>Our addresses</h2>
          <Maps />
        </div>
      </div>
    </div>
  );
};

export default Location;
