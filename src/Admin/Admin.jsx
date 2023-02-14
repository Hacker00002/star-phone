import "./admin.css";
import admin from "../assets/img/icons8-admin-settings-male-80.png";
import characteristics from "../assets/logo/characteristics.png";
import favorite from "../assets/logo/favorite.png";
import promotion from "../assets/logo/promotion.png";
import products from "../assets/logo/product.png";
import "react-toastify/dist/ReactToastify.css";
import top from "../assets/logo/top-three.png";
import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { auth } from "./AdminPost";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [user, setUser] = useState([]);
  const [productsTop, setProducts] = useState([]);
  const [tab, setTab] = useState(0);
  const userCollectionRef = collection(db, "users");
  const userCollectionRefTwo = collection(db, "topProducts");
  const [close, setClose] = useState(false);
  // top-posts
  const [imageLinkTwo, setImageLinkTwo] = useState("");
  const [nameProductTwo, setNameProductTwo] = useState("");
  const [titleProductTwo, setTitleProductTwo] = useState("");
  const [discountProductTwo, setDiscountProductTwo] = useState("");
  const [priceProductTwo, setPriceProductTwo] = useState("");
  const [priceOldProductTwo, setPriceOldProductTwo] = useState("");
  const [descriptionTwo, setDescriptionTwo] = useState("");
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

  const createProductsTwo = async (e) => {
    e.preventDefault();
    if (
      imageLinkTwo === "" ||
      nameProductTwo === "" ||
      titleProductTwo === "" ||
      discountProductTwo === "" ||
      priceProductTwo === "" ||
      priceOldProductTwo === "" ||
      descriptionTwo === ""
    ) {
      notifyMessage();
      return;
    }
    await addDoc(userCollectionRefTwo, {
      img: imageLinkTwo,
      model: nameProductTwo,
      title: titleProductTwo,
      discount: discountProductTwo,
      price: priceProductTwo,
      priceDel: priceOldProductTwo,
      description: descriptionTwo,
    });
    notify();
  };

  const deleteProducts = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    notifyDelete();
  };

  const deleteProductsHandle = async (id) => {
    const userDoc = doc(db, "topProducts", id);
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

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(userCollectionRefTwo);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getUser();
  }, []);

  function closeItem() {
    setClose(!close);
  }

  const [email, setEmailAdmin] = useState("");
  const [password, setAdminPassword] = useState("");
  const [error, setError] = useState(false);
  const Navigate = useNavigate();

  const handleLoginTestAdmin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Navigate("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className="all__edit">
      <div id="admin__fathers">
        <div className="test__admin">
          <div className="container">
            <form onSubmit={handleLoginTestAdmin} id="admin__login">
              <h3>
                Complete the list to access the admin panel
                <i class="fa-solid fa-user-tie"></i>
              </h3>
              <div className="admin__dashboard">
                <i class="fa-solid fa-signature"></i>
                <input type="text" placeholder="Enter username admin" />
              </div>
              <div className="admin__dashboard">
                <i class="fa-solid fa-user-tie"></i>
                <input
                  onChange={(e) => setEmailAdmin(e.target.value)}
                  type="email"
                  placeholder="Enter email admin"
                />
              </div>
              <div className="admin__dashboard">
                <i class="fa-solid fa-lock"></i>
                <input
                  onChange={(e) => setAdminPassword(e.target.value)}
                  type="password"
                  placeholder="Enter password admin"
                />
              </div>
              <div className="btn">
                <button type="submit">Add product</button>
              </div>
              {error && (
                <span>You have entered an incorrect email or password</span>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="div">
          <div className="addTops">
            <a
              href="#"
              onClick={() => {
                setTab(0);
              }}
              className="TopProducts"
            >
              Top Products add
              <img src={top} width={20} alt="" />
            </a>
            <a
              onClick={() => {
                setTab(1);
              }}
              href="#"
              className="TopProducts"
            >
              Add favorites for the client
              <img src={favorite} width={20} alt="" />
            </a>
            <a
              onClick={() => {
                setTab(2);
              }}
              href="#"
              className="TopProducts"
            >
              Add promotional products
              <img src={promotion} width={20} alt="" />
            </a>
            <a
              onClick={() => {
                setTab(3);
              }}
              href="#"
              className="TopProducts"
            >
              All Products
              <img src={products} width={20} alt="" />
            </a>
          </div>
          <div className="tab__father_two" hidden={tab != 1}>
            <form onSubmit={createProductsTwo} id="add__top">
              <div className="top__posts">
                <i class="fa-solid fa-link"></i>
                <input
                  onChange={(evt) => setImageLinkTwo(evt.target.value)}
                  type="url"
                  placeholder="Enter image link"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setNameProductTwo(evt.target.value)}
                  type="text"
                  placeholder="Enter the name of the product"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescriptionTwo(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-signature"></i>
                <input
                  onChange={(evt) => setTitleProductTwo(evt.target.value)}
                  type="text"
                  placeholder="Enter the title of the product"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-tags"></i>
                <input
                  onChange={(evt) => setDiscountProductTwo(evt.target.value)}
                  type="text"
                  placeholder="Add a product discount"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-money-bill-1-wave"></i>
                <input
                  type="text"
                  onChange={(evt) => setPriceProductTwo(evt.target.value)}
                  placeholder="Enter the product price"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-barcode"></i>
                <input
                  onChange={(evt) => setPriceOldProductTwo(evt.target.value)}
                  type="text"
                  placeholder="Enter the old price of the product"
                />
              </div>
              <h1>
                Characteristics
                <img src={characteristics} width={70} alt="" />
              </h1>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="top__posts">
                <i class="fa-solid fa-file-signature"></i>
                <input
                  onChange={(evt) => setDescription(evt.target.value)}
                  type="text"
                  placeholder="Enter the product description"
                />
              </div>
              <div className="btn">
                <button type="submit">Add product</button>
              </div>
            </form>
            <div className="cards__father">
              <div className="cardsFather">
                {productsTop.map((elem) => {
                  return (
                    <div className="discounts">
                      <div className="discBtn">
                        <div className="cards__img">
                          <img src={elem.img} alt="" />
                        </div>
                        <div className="userTexts">
                          <div className="card__text">
                            <p>{elem.model}</p>
                          </div>
                          <div className="price">
                            <h6>{elem.priceDel} uzs</h6>
                            <p>{elem.price} uzs</p>
                          </div>
                        </div>
                        <div className="post">
                          <button
                            onClick={() => {
                              deleteProductsHandle(elem.id);
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="all__tab-fathers" hidden={tab != 0}>
            <div className="all">
              {close ? (
                <div>
                  <div className="edit__bg"></div>
                  <div id="edit__father">
                    <form id="edits">
                      <i onClick={closeItem} class="fa-solid fa-xmark"></i>
                      <div className="edit__father">
                        <i class="fa-regular fa-pen-to-square"></i>
                        <input
                          type="text"
                          id="edit"
                          placeholder="Edit the image"
                        />
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
                  <h1>
                    Characteristics
                    <img src={characteristics} width={70} alt="" />
                  </h1>
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
                  <ToastContainer />
                </form>
              </div>
            </div>
            <div className="cards__father">
              <div className="cardsFather">
                {user.map((elem) => {
                  return (
                    <div className="discounts">
                      <div className="discBtn">
                        <div className="cards__img">
                          <img src={elem.img} alt="" />
                        </div>
                        <div className="userTexts">
                          <div className="card__text">
                            <p>{elem.model}</p>
                          </div>
                          <div className="price">
                            <h6>{elem.priceDel} uzs</h6>
                            <p>{elem.price} uzs</p>
                          </div>
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
