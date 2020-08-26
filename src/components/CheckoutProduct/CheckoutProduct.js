import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import "./CheckoutProduct.css";


const CheckoutProduct = ({ id, title, image, price }) => {
  const [{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };



  return (
 
      <div className="checkoutProduct">
        <div className="checkoutProduct__container">
          <img className="checkoutProduct__image" src={image} alt="" />

          <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>

            <p className="checkoutProduct__price">
              $<strong>{price}</strong>
            </p>
          </div>

          <button className="checkoutProduct__btn" onClick={removeFromBasket}>
            Remove from basket
          </button>
        </div>
      </div>
         
 
  );
};

export default CheckoutProduct;
