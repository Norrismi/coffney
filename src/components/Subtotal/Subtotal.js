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
    <div className="subtotal">
      <div className="subtotal__total">
        <CurrencyFormat
          renderText={(value) => (
            <p>
              Subtotal: ({basket.length}) {amount} for a total of {value}
            </p>
          )}
          value={getBasketTotal(basket).toFixed(2)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <div className="subtotal__checkout">
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Subtotal;
