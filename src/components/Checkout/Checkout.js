import React from "react";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../ContextAPI/StateProvider";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">

      <div className="checkout__left">
      {basket.length >= 1 ? (
        <h4 className='col  m-3'>Here are your items ready for checkout.</h4>
      ) : (
        <h4 className='col  m-3'>You have not selected any items. <br/>
          Add Items to your cart before checkout.</h4>
      )}
        {basket.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
      <div className="checkout__right">
        <div className="checkout__subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
