import { error } from 'console';
import { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeaders';
import './styles.css';
import { Product } from './types';

function Orders() {
     const [products, setProducts] = useState<Product[]>([]);
     console.log(products);

     useEffect (() => {
          fetchProducts()
          .then(response => setProducts(response.data))
          .catch(error => console.error(error));
     }, []);

     return (
          <div className="orders-container">
               <StepsHeader/>
               <ProductsList products={products} />
          </div>
     )
}

export default Orders;