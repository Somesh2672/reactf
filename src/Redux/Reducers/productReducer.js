// productReducer.js
const productReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return action.products;
      default:
        return state;
    }
  };
  
  export default productReducer;
  