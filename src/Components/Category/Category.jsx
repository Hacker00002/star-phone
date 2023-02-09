import "./category.css";
import Translation from "../../language/language.json";
import { languageContext } from "../../language/languageContext";
import { useContext, useEffect, useState } from "react";

const Category = () => {
  const [content, setContent] = useState({});
  const { lang } = useContext(languageContext);

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
    <div className="category">
      <div className="container">
        <ul className="category__list">
          <li className="category__list-item">
            <a href="#" className="category__link">
              {content?.Header?.News}
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              {content?.Header?.Products}
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              {content?.Header?.Price}
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              {content?.Header?.Phones}
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              {content?.Header?.Accessories}
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              {content?.Header?.Keyboards}
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              {content?.Header?.TVs}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
