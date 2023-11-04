// store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from './Reducers/cartReducer'; // Adjust the path based on the actual location of cartReducer
import productReducer from './Reducers/productReducer'; // Adjust the path based on the actual location of productReducer
import thunk from 'redux-thunk'; 
// Combine the reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;