import React from 'react';
import {useStateValue} from '../ContextAPI/StateProvider'

const CheckoutProduct = ({id, title, image, price}) => {

    const [{}, dispatch] = useStateValue()

    return (
        <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="" />
  
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
  
          <p className="checkoutProduct__price">
            $
            <strong>{price}</strong>
          </p>
          
          {/* <button onClick={removeFromBasket}>Remove from basket</button> */}
        </div>
      </div>
    );
}

export default CheckoutProduct;
