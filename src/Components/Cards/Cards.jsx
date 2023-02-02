import { Fragment } from "react";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Loader from "../../Loader/Loader";
import "./cards.css";

const Cards = () => {
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    setLoader(true);
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoader(false);
    };
    getUser();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <Fragment>
      <div className="container">
        <div className="cards__father">
          <div className="cards">
            {user.map((elem) => {
              return (
                <div className="discount">
                  <div className="discount__like">
                    <div className="disc">
                      <p>{elem.discount}</p>
                    </div>
                    <div className="like">
                      <i class="fa-solid card__plus shop fa-cart-plus"></i>
                      <i class="fa-regular card__plus fa-heart"></i>
                    </div>
                  </div>
                  <div className="card__img">
                    <img src={elem.img} alt="" />
                  </div>
                  <div className="card__text">
                    <p>{elem.model}</p>
                  </div>
                  <div className="star">
                    <i class="fa-solid stars fa-star"></i>
                    <i class="fa-solid stars fa-star"></i>
                    <i class="fa-solid stars fa-star"></i>
                    <i class="fa-solid stars fa-star"></i>
                    <i class="fa-solid stars fa-star"></i>
                  </div>
                  <div className="price">
                    <h6>{elem.priceDel} uzs</h6>
                    <p>{elem.price} uzs</p>
                  </div>
                  <div className="btn">
                    <a href="#" className="custom-btn btn-15 button__add">
                      Read more
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;