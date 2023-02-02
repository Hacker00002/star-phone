import "./admin.css";
import admin from "../assets/img/icons8-admin-settings-male-80.png";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const Admin = () => {
  const [imageLink, setImageLink] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [discountProduct, setDiscountProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [priceOldProduct, setPriceOldProduct] = useState("");
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "users");

  const notify = () => {
    toast.success("Product added successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyDelete = () => {
    toast.error("Post deleted successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const notifyMessage = () => {
    toast.warn("Please complete the list to add a product!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const createProducts = async (e) => {
    e.preventDefault();
    if (
      imageLink === "" ||
      nameProduct === "" ||
      titleProduct === "" ||
      discountProduct === "" ||
      priceProduct === "" ||
      priceOldProduct === ""
    ) {
      notifyMessage();
      return;
    }
    await addDoc(userCollectionRef, {
      img: imageLink,
      model: nameProduct,
      title: titleProduct,
      discount: discountProduct,
      price: priceProduct,
      priceDel: priceOldProduct,
    });
    notify();
  };

  const deleteProducts = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    notifyDelete();
  };

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
            <form onSubmit={createProducts} id="admin__form">
              <div className="link">
                <i class="fa-solid fa-link"></i>
                <input
                  onChange={(evt) => setImageLink(evt.target.value)}
                  type="url"
                  placeholder="Enter image link"
                />
              </div>
              <div className="link">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setNameProduct(evt.target.value)}
                  type="text"
                  placeholder="Enter the name of the product"
                />
              </div>
              <div className="link">
                <i class="fa-solid fa-signature"></i>
                <input
                  onChange={(evt) => setTitleProduct(evt.target.value)}
                  type="text"
                  placeholder="Enter the title of the product"
                />
              </div>
              <div className="link">
                <i class="fa-solid fa-tags"></i>
                <input
                  onChange={(evt) => setDiscountProduct(evt.target.value)}
                  type="text"
                  placeholder="Add a product discount"
                />
              </div>
              <div className="link">
                <i class="fa-solid fa-money-bill-1-wave"></i>
                <input
                  type="text"
                  onChange={(evt) => setPriceProduct(evt.target.value)}
                  placeholder="Enter the product price"
                />
              </div>
              <div className="link">
                <i class="fa-solid fa-barcode"></i>
                <input
                  onChange={(evt) => setPriceOldProduct(evt.target.value)}
                  type="text"
                  placeholder="Enter the old price of the product"
                />
              </div>
              <div className="btn">
                <button type="submit">Add product</button>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              {/* Same as */}
              <ToastContainer />
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
                  <div className="post">
                    <button
                      onClick={() => {
                        deleteProducts(elem.id);
                      }}
                      className="custom-bts btn-153"
                    >
                      Delete
                    </button>
                    <button className="custom-bts btn-152">Edit</button>
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
