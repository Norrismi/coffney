import React from "react";
import "./Product.css";
import { useStateValue } from "../ContextAPI/StateProvider";

const Product = ({ id, title, price, image }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <img className="product_image" src={image} alt="Card  cap" />
        <div className="card-body">
          <h5 className="product__title"> {title}</h5>

          <div className="price__container">
            <span className="product__price__strike">
              ${(price + 10).toFixed(2)}
            </span>
            <span className="product__price">${price}</span>
          </div>

          <button
            className="btn btn-primary product__btn"
            onClick={addToBasket}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    /* 
    // <div className="product">
    //   <div className="product__info">
    //     <p>{title}</p>

    //     <p className="product__price">
    //       $<strong>{price}</strong>
    //     </p>
    //   </div>
    //   <img className="product__image" src={image} alt="" />
    //   <button
    //   //   onClick={addToBasket}
    //   >
    //     Add to basket
    //   </button>
    // </div> */
  );
};

export default Product;
