// actions.js
export const fetchProducts = () => (dispatch) => {
    // Use axios or fetch to make a GET request to the API and dispatch the products to the reducer.
    // Update products state in the Redux store.
  };
  
  export const addToCart = (product) => {
    return {
      type: 'ADD_TO_CART',
      product,
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      productId,
    };
  };
  
  export const checkout = () => {
    return {
      type: 'CHECKOUT',
    };
  };
  