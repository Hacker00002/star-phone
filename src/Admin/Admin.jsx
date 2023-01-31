import "./admin.css";
import admin from "../assets/img/icons8-admin-settings-male-80.png";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const Admin = () => {
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  return (
    <div className="container">
      <div className="div">
        <div className="all">
          <div className="admin__father">
            <h1>
              Hello Admin
              <img src={admin} alt="" />
            </h1>
          </div>
          <div className="forms">
            <form id="admin__form">
              <div className="link">
                <i class="fa-solid fa-link"></i>
                <input type="url" placeholder="Enter image link" />
              </div>
              <div className="link">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  type="text"
                  placeholder="Enter the name of the product"
                />
              </div>
              <div className="link">
                <i class="fa-solid fa-tags"></i>
                <input type="text" placeholder="Add a product discount" />
              </div>
              <div className="link">
                <i class="fa-solid fa-money-bill-1-wave"></i>
                <input type="text" placeholder="Enter the product price" />
              </div>
              <div className="link">
                <i class="fa-solid fa-barcode"></i>
                <input
                  type="text"
                  placeholder="Enter the old price of the product"
                />
              </div>
              <div className="btn">
                <button type="submit">Add product</button>
              </div>
            </form>
          </div>
        </div>
        <div className="cards__father">
          <div className="cards">
            {user.map((elem) => {
              return (
                <div className="discount">
                  <div className="discount__like">
                    <div className="disc">
                      <p>DISCOUNT</p>
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
                  <div className="post">
                    <button className="custom-bt btn-153">Delete</button>
                    <button className="custom-bt btn-153">Edit</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
