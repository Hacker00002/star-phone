import React from "react";
import Cards from "../Cards/Cards";
import CategoryAll from "../CategoryAll/CategoryAll";
import Slider from "../Slider/Slider";

const Main = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <CategoryAll />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Main;
