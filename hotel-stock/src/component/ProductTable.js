import React, { useState } from 'react';
import './producttable.css';
import { RiDeleteBinLine, RiAddLine } from 'react-icons/ri';

const ProductTable = ({ products, onStockChange, onDelete }) => {
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleStockChange = async (productId, field, newValue) => {
    try {
      await fetch(`http://localhost:8080/product/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          [field]: newValue,
        }),
      });

      onStockChange(productId, field, newValue);
    } catch (error) {
      console.error(`Error updating ${field}:`, error);
    }
  };

  const sortProductsByStock = (products, sortOrder) => {
    return [...products].sort((a, b) =>
      sortOrder === 'asc' ? a.PresentStock - b.PresentStock : b.PresentStock - a.PresentStock
    );
  };

  const sortedProducts = sortProductsByStock(products, sortOrder);

  return (
    <div className='fulltable'>
      <div className='sort-container'>
        <label className='sort'>Sort </label>
        <select className='sortoption' value={sortOrder} onChange={handleSortChange}>
          <option value='asc'>Low to High</option>
          <option value='desc'>High to Low</option>
        </select>
        <input
          className='search-bar'
          type='text'
          placeholder='Quick Search....'
          value={searchText}
          onChange={handleSearchChange}
        />
        <a href='/upload' className='add-button'>
          <RiAddLine /> Add Product
        </a>
      </div>

      <table className='tablecont'>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
            <th>Total Stock</th>
            <th>Present Stock</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.brand}</td>
              <td>{product.Category}</td>
              <td>{product.Name}</td>
              <td>
                <input
                  className='presenstock'
                  type='text'
                  value={product.Price}
                  onChange={(e) => handleStockChange(product._id, 'Price', e.target.value)}
                />
              </td>
              <td>
                <input
                  className='presenstock'
                  type='text'
                  value={product.TotalStock}
                  onChange={(e) => handleStockChange(product._id, 'TotalStock', e.target.value)}
                />
              </td>
              <td>
                <input
                  className='presenstock'
                  type='text'
                  value={product.PresentStock}
                  onChange={(e) => handleStockChange(product._id, 'PresentStock', e.target.value)}
                />
              </td>
              <td>
                <RiDeleteBinLine onClick={() => onDelete(product._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
