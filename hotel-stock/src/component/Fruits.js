import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import axios from 'axios';

const Fruits = () => {
  const [products, setProducts] = useState([]);
  const categoryToDisplay = 'fruit';

  useEffect(() => {
    fetchProductsFromDatabase();
  }, []);

  const fetchProductsFromDatabase = () => {
    axios
      .get('http://localhost:8080/product')
      .then((response) => {
        
        const filteredProducts = response.data.filter((product) => product.Category === categoryToDisplay);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  const updateProductStock = (productId, field, newValue) => {
    axios
      .put(`http://localhost:8080/product/${productId}/update-property`, {
        field,
        newValue,
      })
      .then((response) => {
        console.log(`Product ${field} updated:`, response.data);
        fetchProductsFromDatabase();
      })
      .catch((error) => console.error(`Error updating ${field}:`, error));
  };
  const handleStockChange = (productId, field, newValue) => {
    const updatedProducts = products.map((product) =>
      product._id === productId ? { ...product, [field]: newValue } : product
    );
    setProducts(updatedProducts);
  };

  const handleFormSubmit = () => {
    products.forEach((product) => {
      updateProductStock(product._id, 'Price', product.Price);
      updateProductStock(product._id, 'TotalStock', product.TotalStock);
      updateProductStock(product._id, 'PresentStock', product.PresentStock);
    });
    alert('Changes saved successfully!');
  };

  const handleProductDelete = (productId) => {
    axios
      .delete(`http://localhost:8080/product/${productId}`)
      .then((response) => {
        console.log('Product deleted:', response.data);
        alert("product deleted")
        fetchProductsFromDatabase();
      })
      .catch((error) => console.error('Error deleting product:', error));
  };
  return (
    <div>
      <h1>Fruits  Stock Status</h1>
      <ProductTable products={products} onStockChange={handleStockChange} onDelete={handleProductDelete} />
      <div className='savebuttonfull'>
      <button className="save-button" onClick={handleFormSubmit}>
        Save Changes
      </button>
      </div>
    </div>
  );
};

export default Fruits
