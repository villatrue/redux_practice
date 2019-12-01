
import { combineReducers } from 'redux';

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case 'INCREMENT':
            console.log(`%c "${action.payload}" added to counter`, `color: #bada55`);
            return state + action.payload;
        case 'DECREMENT':
            return state - action.payload;
        default:
            return state;
    }
};

const loggedReducer = (state = false, action) => {
    switch (action.type){
        case 'SIGN_IN':
           return !state ;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});


export default rootReducer;