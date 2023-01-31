import "./category.css";

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <ul className="category__list">
          <li className="category__list-item">
            <a href="#" className="category__link">
              News
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              New products
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              Discounts
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              Phones and gadgets
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              Accessories
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              Keyboards and mouses
            </a>
          </li>
          <li className="category__list-item">
            <a href="#" className="category__link">
              TVs
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
