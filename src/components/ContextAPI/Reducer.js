import shirt1 from "../../Assets/shirts/shirt1.jpg";

export const initialState = {
  basket: [

  ],
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {

  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };


    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index > 0) {
        newBasket.splice(index, 1);
      } else {
        console.error(`Can't remove ${action.id}`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
