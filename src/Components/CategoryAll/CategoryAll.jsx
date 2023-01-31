import "./categoryAll.css";
import post1 from "../../assets/postImg/post1.jpg";
import post2 from "../../assets/postImg/post2.jpg";
import post3 from "../../assets/postImg/post3.jpg";
import post4 from "../../assets/postImg/post4.jpg";
import post5 from "../../assets/postImg/post5.jpg";
import post6 from "../../assets/postImg/post6.jpg";

const CategoryAll = () => {
  return (
    <div className="container">
      <div className="img__father">
        <a href="#" className="post__img">
          <h2>Phones</h2>

          <div className="containers">
            <img src={post1} alt="" />
          </div>
        </a>
        <a href="#" className="post__img">
          <h2>Accessories</h2>

          <div className="containers">
            <img src={post2} alt="" />
          </div>
        </a>
        <a href="#" className="post__img">
          <h2>Keyboards and mouses</h2>

          <div className="containers">
            <img src={post3} alt="" />
          </div>
        </a>
        <a href="#" className="post__img">
          <h2>TWs</h2>

          <div className="containers">
            <img src={post4} alt="" />
          </div>
        </a>
        <a href="#" className="post__img">
          <h2>Phones and gadgets</h2>

          <div className="containers">
            <img src={post5} alt="" />
          </div>
        </a>
        <a href="#" className="post__img">
          <h2>New products</h2>

          <div className="containers">
            <img src={post6} alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default CategoryAll;
