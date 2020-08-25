import React from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import {useStateValue} from '../ContextAPI/StateProvider'

const Checkout = () => {

const [{basket}] = useStateValue()


    return (
        <div>
        {basket.map(item => (
            <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            
            
            />
        ))}
        </div>
    );
}

export default Checkout;
