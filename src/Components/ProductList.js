// Components/ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../Redux/Action/actions';
import axios from 'axios'; // Import axios

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    // Make a GET request to fetch products from the API
    axios.get('https://dummyjson.com/products')
      .then((response) => {
        dispatch(fetchProducts(response.data)); // Dispatch the fetched products to the Redux store
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, [dispatch]);
console.log(products);
  return (
    <div>
      {products.map((products) => (
        <div key={products.id}>
          <img src={products.image} alt={products.title} />
          <h3>{products.title}</h3>
          <p>${products.price}</p>
          <button onClick={() => dispatch(addToCart(products))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
