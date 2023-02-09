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
  const [user, setUser] = useState([]);
  const userCollectionRef = collection(db, "users");
  const [close, setClose] = useState(false);
  // admin
  const [imageLink, setImageLink] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [discountProduct, setDiscountProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [priceOldProduct, setPriceOldProduct] = useState("");
  const [description, setDescription] = useState("");
  const [FUNCTIONS1, setFUNCTIONS1] = useState("");
  const [FUNCTIONS2, setFUNCTIONS2] = useState("");
  const [FUNCTIONS3, setFUNCTIONS3] = useState("");
  const [FUNCTIONS4, setFUNCTIONS4] = useState("");
  const [FUNCTIONS5, setFUNCTIONS5] = useState("");
  const [FUNCTIONS6, setFUNCTIONS6] = useState("");
  const [FUNCTIONS7, setFUNCTIONS7] = useState("");
  const [FUNCTIONS8, setFUNCTIONS8] = useState("");
  const [FUNCTIONS9, setFUNCTIONS9] = useState("");
  const [FUNCTIONS10, setFUNCTIONS10] = useState("");
  const [FUNCTIONS11, setFUNCTIONS11] = useState("");
  const [FUNCTIONS12, setFUNCTIONS12] = useState("");
  const [FUNCTIONS13, setFUNCTIONS13] = useState("");
  // message
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
      priceOldProduct === "" ||
      description === ""
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
      description: description,
      function1: FUNCTIONS1,
      function2: FUNCTIONS2,
      function3: FUNCTIONS3,
      function4: FUNCTIONS4,
      function5: FUNCTIONS5,
      function6: FUNCTIONS6,
      function7: FUNCTIONS7,
      function8: FUNCTIONS8,
      function9: FUNCTIONS9,
      function10: FUNCTIONS10,
      function11: FUNCTIONS11,
      function12: FUNCTIONS12,
      function13: FUNCTIONS13,
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

  function closeItem() {
    setClose(!close);
  }

  return (
    <div className="all__edit">
      <div className="container">
        <div className="div">
          {close ? (
            <div>
              <div className="edit__bg"></div>
              <div id="edit__father">
                <form id="edits">
                  <i onClick={closeItem} class="fa-solid fa-xmark"></i>
                  <div className="edit__father">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <input type="text" id="edit" placeholder="Edit the image" />
                  </div>
                  <div className="edit__father">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <input
                      type="text"
                      id="edit"
                      placeholder="Edit the name product"
                    />
                  </div>
                  <div className="edit__father">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <input
                      type="text"
                      id="edit"
                      placeholder="Edit the product description"
                    />
                  </div>
                  <div className="edit__father">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <input
                      type="text"
                      id="edit"
                      placeholder="Edit the title product"
                    />
                  </div>
                  <div className="edit__father">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <input
                      type="text"
                      id="edit"
                      placeholder="Edit the product discount"
                    />
                  </div>
                  <div className="edit__father">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <input
                      type="text"
                      id="edit"
                      placeholder="Edit the product price"
                    />
                  </div>
                  <div className="edit__father">
                    <i class="fa-regular fa-pen-to-square"></i>
                    <input
                      type="text"
                      id="edit"
                      placeholder="Edit the product old price"
                    />
                  </div>
                </form>
              </div>
            </div>
          ) : (
            ""
          )}
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
                  <i class="fa-solid fa-file-signature"></i>
                  <input
                    onChange={(evt) => setDescription(evt.target.value)}
                    type="text"
                    placeholder="Enter the product description"
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
                <h1>Characteristics</h1>
                <div className="link">
                  <i class="fa-solid">1</i>
                  <input
                    onChange={(evt) => setFUNCTIONS1(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">2</i>
                  <input
                    onChange={(evt) => setFUNCTIONS2(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">3</i>
                  <input
                    onChange={(evt) => setFUNCTIONS3(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">4</i>
                  <input
                    onChange={(evt) => setFUNCTIONS4(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">5</i>
                  <input
                    onChange={(evt) => setFUNCTIONS5(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">6</i>
                  <input
                    onChange={(evt) => setFUNCTIONS6(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">7</i>
                  <input
                    onChange={(evt) => setFUNCTIONS7(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">8</i>
                  <input
                    onChange={(evt) => setFUNCTIONS8(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">9</i>
                  <input
                    onChange={(evt) => setFUNCTIONS9(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">10</i>
                  <input
                    onChange={(evt) => setFUNCTIONS10(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">11</i>
                  <input
                    onChange={(evt) => setFUNCTIONS11(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">12</i>
                  <input
                    onChange={(evt) => setFUNCTIONS12(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
                  />
                </div>
                <div className="link">
                  <i class="fa-solid">13</i>
                  <input
                    onChange={(evt) => setFUNCTIONS13(evt.target.value)}
                    type="text"
                    placeholder="Enter the SPECIFICATIONS AND FUNCTIONS"
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
            <div className="cards card">
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
                      <button
                        onClick={closeItem}
                        className="custom-bts btn-152"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
