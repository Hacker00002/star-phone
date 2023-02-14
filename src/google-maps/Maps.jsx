import "./maps.css";

const Maps = () => {
  return (
    <div className="maps__father">
      <div className="mapsFathers">
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.3830490755236!2d69.20323461539674!3d41.34402720664508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8dc239e55a0f%3A0xe91595a3f625449f!2sEco%20bozor!5e0!3m2!1sen!2s!4v1675416713243!5m2!1sen!2s"
            width="700"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.950855363314!2d69.34979711539698!3d41.35342190606306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef47140cbcd4f%3A0x69c9e6e30a920e30!2sEcobozor!5e0!3m2!1sen!2s!4v1675416793664!5m2!1sen!2s"
            width="700"
            height="400"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="maps2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.626577135913!2d69.26962081539659!3d41.338732806972835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5bc3472597%3A0xb7a352920b7c168a!2sMalika%20Elektronika%20Bozori!5e0!3m2!1sen!2s!4v1676116800141!5m2!1sen!2s"
            height="400"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact__us">
        <h2>Contact us</h2>
        <div className="work">
          <h3>
            <i class="fa-solid fa-solids fa-phone-volume"></i>{" "}
            <span>
              +(998)99 844-56-64 <br /> +(998) 90 959 23 33
            </span>
          </h3>
          <h3>
            <i class="fa-solid fa-solids fa-file-signature"></i>{" "}
            <span>
              Muhammadamin <br /> Ibrohim
            </span>
          </h3>
          <h3>
            <i class="fa-solid fa-solids fa-clock"></i> <span>08:00-23:00</span>
          </h3>
          <h3>
            <i class="fa-brands fa-solids fa-instagram"></i>{" "}
            <a href="#">cellus.uz</a>
          </h3>
          <h3>
            <i class="fa-brands fa-solids fa-telegram"></i>
            <a href="#">Admin</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Maps;
