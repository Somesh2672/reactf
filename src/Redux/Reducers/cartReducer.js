// cartReducer.js
const cartReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        // Add the product to the cart state if it doesn't already exist.
        // Update cart state in the Redux store.
      case 'REMOVE_FROM_CART':
        // Remove the product with the given ID from the cart state.
        // Update cart state in the Redux store.
      case 'CHECKOUT':
        // Clear the cart state after successful checkout.
      default:
        return state;
    }
  };
  
  export default cartReducer;
  