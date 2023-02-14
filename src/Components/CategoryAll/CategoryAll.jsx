import { languageContext } from "../../language/languageContext";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import Translation from "../../language/language.json";

import "./categoryAll.css";
import logoBrand from "../../assets/logo_payments/pngwing.com (4).png";

const CategoryAll = () => {
  const [content, setContent] = useState({});
  const { lang, setLanguage } = useContext(languageContext);

  useEffect(() => {
    if (lang == "English") {
      setContent(Translation.English);
    } else if (lang == "Russian") {
      setContent(Translation.Russian);
    } else if (lang == "Uzbek") {
      setContent(Translation.Uzbek);
    }
  });
  return (
    <div className="container">
      <logo-slider>
        <div>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//62668c2513e84.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand1}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//6325aa1ecd141.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand2}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//63d22ceb24043.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand3}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//60d58d363b0cb.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand4}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//62283d51b604d.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand5}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//631ebda12583b.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand6}</h3>
          </a>
          <a href="#">
            <img src={logoBrand} alt="" />
            <h3>{content?.LogoBrands_name?.Brand8}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//63b96a474c01f.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand7}</h3>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//62668c2513e84.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand1}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//6325aa1ecd141.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand2}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//63d22ceb24043.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand3}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//60d58d363b0cb.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand4}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//62283d51b604d.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand5}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//631ebda12583b.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand6}</h3>
          </a>
          <a href="#">
            <img src={logoBrand} alt="" />
            <h3>{content?.LogoBrands_name?.Brand8}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//63b96a474c01f.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand7}</h3>
          </a>
        </div>
        <div>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//62668c2513e84.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand1}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//6325aa1ecd141.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand2}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//63d22ceb24043.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand3}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//60d58d363b0cb.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand4}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//62283d51b604d.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand5}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//631ebda12583b.jpg.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand6}</h3>
          </a>
          <a href="#">
            <img src={logoBrand} alt="" />
            <h3>{content?.LogoBrands_name?.Brand8}</h3>
          </a>
          <a href="#">
            <img
              src="https://assets.asaxiy.uz/product/main_image/desktop//63b96a474c01f.png.webp"
              alt=""
            />
            <h3>{content?.LogoBrands_name?.Brand7}</h3>
          </a>
        </div>
      </logo-slider>
    </div>
  );
};
export default CategoryAll;
