import { createStore } from "redux";


let initialState = {
    name: "Rahul",
    post: 0,
    age: 24
}

//This is a good practice action type should be in capital letters

// Action
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCREMENTBY = "INCREMENTBY";


// function reducer(state = initialState, action) {
//     if (action.type === INCREMENT) {
//         return { ...state, post: state.post + 1 };
//     } else if (action.type === DECREMENT) {
//         return { ...state, post: state.post - 1 };
//     }
//     else if (action.type === INCREMENTBY) {
//         return { ...state, post: state.post + action.payload };
//     }
//     else {
//         return state; // Return current state if action type doesn't match
//     }
// }
//we can also write it in switch case


const postCount = document.querySelector(".post-count");
const incrementBtn = document.querySelector(".postBtn");

incrementBtn.addEventListener("click", () => {
    store.dispatch({ type: INCREMENT });
})

function reducer(state = initialState, action) {

    switch (action.type) {
        case INCREMENT:
            return { ...state, post: state.post + 1 };

        case DECREMENT:
            return { ...state, post: state.post - 1 };
        case INCREMENTBY:
            return { ...state, post: state.post + action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //Dev tools add so its call store enhancer, enhance the store functionality

console.log(store)
console.log(store.getState());

const unsubcribe = store.subscribe(() => {
    console.log(store.getState());
    postCount.innerHTML = store.getState().post;
})

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENTBY, payload: 5 });
console.log(store.getState());
// unsubcribe();