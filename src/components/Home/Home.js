import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import coffee from "../../Assets/coffee.png";
import honey from "../../Assets/honey.png";
import { FaPlus } from "react-icons/fa";
import { shirt1, shirt2, shirt3, shirt4, shirt5, shirt6 } from ".";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__introContainer">
        <div className="home__intro">
          <img className="home__image" src={coffee} alt="top" />

          <FaPlus className="home__plus" />

          <img className="home__image" src={honey} alt="top" />
        </div>
        <div className="home__Font">Coffney</div>
      </div>

      <div className="home">
        <div className="home__row">
          <Product
            id="2"
            title="I have O.C.D Obsessive Coffee Disorder"
            price={24.99}
            image={shirt2}
          />

          <Product
            id="3"
            title="Ok, But First Coffee"
            price={19.99}
            image={shirt3}
          />
          <Product
            id="4"
            title="Instant Human Just add Coffee"
            price={24.99}
            image={shirt4}
          />
          <Product
            id="5"
            title="I'm Not Addicted To Coffee We're Just In a Commited Relationship"
            price={19.99}
            image={shirt5}
          />

          <Product
            id="1"
            title="Yoga Coffee Naps"
            price={19.99}
            image={shirt1}
          />
          <Product
            id="6"
            title="Hello Free Coffee"
            price={24.99}
            image={shirt6}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
