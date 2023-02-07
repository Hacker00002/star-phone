import "./singl.css";
import { useEffect, useState } from "react";
import { db } from "./SinglPost";
import Loader from "../../Loader/Loader";
import { collection, getDocs } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";

const SingPage = () => {
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
    <div className="container">
      {user.map((elem) => {
        return (
          <div className="singlPage">
            <div className="singl__name">
              <h3>{elem.model}</h3>
            </div>
            <div className="singl__img">
              <div className="img__bg">
                <a href="#">
                  <i class="fa-regular logouts btn-15 fa-heart"></i>
                </a>
                <img src={elem.img} alt="" />
              </div>
              <div className="product__all">
                <div className="name__products">
                  <div className="text__product">
                    <h3>{elem.model}</h3>
                  </div>
                  <div className="price__product">
                    <p>{elem.priceDel}</p>
                    <h4>{elem.price}</h4>
                  </div>
                </div>
                <div className="product__add">
                  <h4>
                    Stock: <span> ● Есть в наличии</span>
                  </h4>
                </div>
                <div className="brand">
                  <h3>
                    Brand: <span>{elem.model}</span>
                  </h3>
                </div>
                <div className="star__product">
                  <p>Reviews</p>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </div>
                <div className="btn__product">
                  <a href="/" className="btn-153 addButton custom-bts">
                    Add to card
                    <i class="fa-solid fa-basket-shopping"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="SPECIFICATIONS">
              <div className="text__functions">
                <h2>Characteristics</h2>
              </div>
              <div className="functions__products">
                <div className="functions__product-one">
                  <p>{elem.function1}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function2}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function3}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function4}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function5}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function6}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function7}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function8}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function9}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function10}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function11}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function12}</p>
                </div>
                <div className="functions__product-one">
                  <p>{elem.function13}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingPage;
