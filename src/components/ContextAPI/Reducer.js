import shirt1 from '../../Assets/shirts/shirt1.jpg'


export const initialState = {
    basket: [
        {
            id:"1",
            title:"Yoga Coffee Naps",
            price: 19.99,
            image: shirt1
        }
    ]
}

export const getBasketTotal = (basket) => basket?.reduce((a,b)=> a+b, 0)

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state, 
                basket: [...state.basket, action.item]
            };
        default:
        return state;
    }
}

export default reducer;