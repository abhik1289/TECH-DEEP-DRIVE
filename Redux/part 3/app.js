import { createStore } from "redux";
import { productsList } from "./productsList";

console.log("first")

let inititalState = {
    products: productsList,
    cart: [],
    wathlist: []
}

//ACTIONs
const ADD_TO_CART = 'card/addCard';
const REMOVE_FROM_CART = 'card/removeCard';
const ADD_TO_WISHLIST = 'watchlist/addWatchlist';
const REMOVE_FROM_WISHLIST = 'watchlist/removeWatchlist';
const INCREASE_QUANTITY = 'card/increaseQuantity';
const DECREASE_QUANTITY = 'card/decreaseQuantity';


const reducer = (state = inititalState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((product) => product.productId !== action.payload.productId),
            };
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wathlist: [...state.wathlist, action.payload]
            }
        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wathlist: state.wathlist.filter((product) => product.productId !== action.payload.productId)
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((product) =>
                    product.productId === action.payload.productId
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                card: state.cart.map((product) => {
                    if (product.productId === action.payload.productId) {
                        return { ...product, quantity: product.quantity - 1 }
                    }
                    return product

                })
            }
        default:
            return state;
    }

}

const store = createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({
    type: ADD_TO_CART, payload: {
        productId: 1,
        quantity: 1
    }
})

store.dispatch({
    type: ADD_TO_CART, payload: {
        productId: 10,
        quantity: 1
    }
})
store.dispatch({
    type: ADD_TO_CART, payload: {
        productId: 13,
        quantity: 1
    }
})

store.dispatch({
    type: ADD_TO_CART, payload: {
        productId: 30,
        quantity: 1
    }
})
store.dispatch({
    type: ADD_TO_CART, payload: {
        productId: 35,
        quantity: 1
    }
})
store.dispatch({
    type: ADD_TO_WISHLIST, payload: {
        productId: 35,
    }
})
// store.dispatch({
//     type: ADD_TO_WISHLIST, payload: {
//         productId: 75,
//     }
// })
// store.dispatch({
//     type: REMOVE_FROM_CART, payload: {
//         productId: 1,
//     }
// })
// store.dispatch({
//     type: REMOVE_FROM_WISHLIST, payload: {
//         productId: 35,
//     }
// })
store.dispatch({
    type: INCREASE_QUANTITY, payload: {
        productId: 10,
    }
})
store.dispatch({
    type: INCREASE_QUANTITY, payload: {
        productId: 10,
    }
})
store.dispatch({
    type: INCREASE_QUANTITY, payload: {
        productId: 10,
    }
})
store.dispatch({
    type: DECREASE_QUANTITY, payload: {
        productId: 10,
    }
})