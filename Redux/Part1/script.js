

// let state = {
//     count: 0
// }


// let previousState = state;

// function increment() {
//     //------------>this is mutating way
//     // state.count++;
//     //------------>this is non mutating way
//     state = { count: state.count + 1 };


// }
// increment();

// console.log(state.count);


// let reduxState = {
//     name: 'John',
//     age: 30,
//     post: 0
// }

// how redux works

function reducer(state, action) {
    if (action.type === 'INCREMENT') {
        return { ...state, post: state.post + 1 };
    } else if (action.type === 'DECREMENT') {
        return { ...state, post: state.post - 1 };
    }
    else if (action.type === 'INCREMENTBY') {
        return { ...state, post: state.post + action.payload };
    }
    else {
        return state; // Return current state if action type doesn't match
    }
}

// Initial user state
let user = { post: 0 }; // Ensure it has a 'post' property

let reduxState = reducer(user, { type: 'INCREMENT' });
console.log(reduxState); // { post: 1 }

reduxState = reducer(reduxState, { type: 'INCREMENT' });
console.log(reduxState); // { post: 2 }

reduxState = reducer(reduxState, { type: 'INCREMENTBY', payload: 5 });
console.log(reduxState); // { post: 1 }
