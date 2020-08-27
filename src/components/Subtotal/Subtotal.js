import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../ContextAPI/StateProvider";
import { getBasketTotal } from "../ContextAPI/Reducer";
import CurrencyFormat from "react-currency-format";

const Subtotal = ({ id, title, image, price }) => {
  const [{ basket }, {}] = useStateValue();

  let amount = basket.length > 1 ? "Items" : "Item";

  console.log();

  return (
    <div className="subtotal sticky-top">
      <div className="subtotal__total sticky-top">
        <CurrencyFormat
          renderText={(value) => (
            <p>
              Subtotal: ({basket.length} {amount}): 
              <strong> {value}</strong>
            </p>
          )}
          value={getBasketTotal(basket).toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <div className="subtotal__checkout">
        <button className="subtotal__btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Subtotal;
