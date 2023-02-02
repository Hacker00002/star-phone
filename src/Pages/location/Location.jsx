import "./location.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Location = () => {
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
      <div className="contact">
        <div className="contact__top">
          <div className="contact__text">
            <h2>Contact us</h2>
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
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="contacts">
              <i class="fa-solid fa-phone-volume"></i>
              <input
                type="tel"
                name="tel"
                placeholder="Enter a phone number to contact you"
                required
              />
            </div>
            <div className="contacts">
              <i class="fa-brands fa-solid fa-telegram"></i>
              <input
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
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1XZTfGHG5TMY8hi31W3p2pGuusJJ6ywg&ehbc=2E312F"
        width="640"
        height="480"
      ></iframe>
    </div>
  );
};

export default Location;
