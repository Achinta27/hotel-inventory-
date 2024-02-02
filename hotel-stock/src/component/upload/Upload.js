import React, { useState } from 'react';
import './ProductUpload.css';
import axios from 'axios';
import ExcelUpload from '../../component/upload/ExcelUpload';

const Upload = () => {
  const initialProductState = {
    brand: '',
    Category: '',
    Name: '',
    Price: '',
    TotalStock: '',
    PresentStock: '',
  };

  const [product, setProduct] = useState(initialProductState);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/userdata/${product.Category}`, product);
      console.log('Response Data:', response.data);
      alert('Product added successfully!');
      setProduct(initialProductState); 
    } catch (error) {
      console.error('Error:', error);
      alert('Error adding product. Please check the console for details.');
    }
  };

  const handleProductChange = (field, value) => {
    setProduct({ ...product, [field]: value });
  };

  return (
    <div className="fullcontainer">
      <h1>Product Upload</h1>
      <form className="productfrom" onSubmit={handleFormSubmit}>
         <div className="productcontainer">
           <h2 className="uploadproduct">Product 1</h2>
           <div className="label">
             <label>Brand:</label>
             <input
             className='productupload'
              type="text"
              name="brand"
              value={product.brand}
              onChange={(e) => handleProductChange('brand', e.target.value)}
            />
          </div>
          <div className="label">
            <label>Category:</label><br/>
            <select
            className='productupload'
    name="Category"
    value={product.Category}
    onChange={(e) => handleProductChange('Category', e.target.value)}>
    <option value="">Select Category</option>
    <option value="vegetable">Vegetable</option>
    <option value="dairy">Dairy</option>
    <option value="fruit">Fruit</option>
    <option value="spices">Spices</option>
  </select>
          <div className="label">
            <label>Name:</label>
            <input
            className='productupload'
              type="text"
              name="Name"
              value={product.Name}
              onChange={(e) => handleProductChange('Name', e.target.value)}
            />
          </div>
          <div className="label">
            <label>Price:</label><br/>
            <input
            className='productupload'
              type="number"
              name="Price"
              value={product.Price}
              onChange={(e) => handleProductChange('Price', e.target.value)}
            />
          </div>
          <div className="label">
            <label>Total Stock:</label><br/>
            <input
            className='productupload'
              type="number"
              name="TotalStock"
              value={product.TotalStock}
              onChange={(e) => handleProductChange('TotalStock', e.target.value)}
            />
          </div>
          <div className="label">
            <label>Present Stock:</label><br/>
            <input
            className='productupload'
              type="number"
              name="PresentStock"
              value={product.PresentStock}
              onChange={(e) => handleProductChange('PresentStock', e.target.value)}
            />
          </div>
        </div>
        <div className="button-container">
          <button className="productbutton" type="submit">
            Upload Product
          </button>
        </div>
        </div>
      </form>
      <ExcelUpload></ExcelUpload>
    </div>
  );
};

export default Upload;