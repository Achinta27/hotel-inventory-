
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './stocksection.css';

const Stocksection = () => {
  const [lowStockProducts, setLowStockProducts] = useState([]);

  useEffect(() => {
    fetchLowStockProducts();
  }, []);

  const fetchLowStockProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/product');
      const lowStockProducts = response.data.filter(product => parseInt(product.PresentStock) <= 5);
      setLowStockProducts(lowStockProducts);
    } catch (error) {
      console.error('Error fetching low stock products:', error);
    }
  };

  

  return (
    <div className='fullstocksection'>
       <h2>Low Stock Products</h2>
      <table  className="alert-table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Category</th>
            <th>Name</th>
            <th>Present Stock</th>
          </tr>
        </thead>
        <tbody>
          {lowStockProducts.map(product => (
            <tr key={product._id}>
              <td>{product.brand}</td>
              <td>{product.Category}</td>
              <td>{product.Name}</td>
              <td>{product.PresentStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stocksection;









// import React from 'react'
// import logo1 from '../src/image/logo1.jpg'
// import logo2 from '../src/image/logo2.jpg'
// import logo3 from '../src/image/logo3.jpg'
// import logo4 from '../src/image/logo4.jpg'
// import logo9 from '../src/image/logo9.jpeg'
// import logo10 from '../src/image/logo10.webp'
// import logo11 from '../src/image/logo11.jpg'
// import logo12 from '../src/image/logo12.jpg'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import'./home.css';

// const Stocksection = () => {
//   return (
//     <>
    
//     <h2>Stock status</h2><hr/>
//         <div className="container">
//             <div className="row">
//                 <div className="col-sm">
//                     <div class="card">
//                         <img class="card-img-top" src={logo1} alt="Tomato"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Tomato</h5>
//                             <p class="card-text-1">Almost stock out!</p>
//                             <a href="/Vagitable" class="btn btn-primary">Check status</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm">
//                     <div class="card">
//                         <img class="card-img-top" src={logo2} alt="Onion"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Onion</h5>
//                             <p class="card-text-1">Almost stock out!</p>
//                             <a href="/Vagitable" class="btn btn-primary">Check status</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm">
//                     <div class="card">
//                         <img class="card-img-top" src={logo3} alt="Capsicum"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Capsicum</h5>
//                             <p class="card-text-1">Almost stock out!</p>
//                             <a href="/Vagitable" class="btn btn-primary">Check status</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm">
//                     <div class="card">
//                         <img class="card-img-top" src={logo4} alt="potatoes"/>
//                         <div class="card-body">
//                             <h5 class="card-title">potatoes</h5>
//                             <p class="card-text-1">Almost stock out!</p>
//                             <a href="/Vagitable" class="btn btn-primary">Check status</a>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>
            
            
//         </div>
//       <div className="container">
//             <div className="row">
//                 <div className="col-sm">
//                     <div class="card">
//                         <img class="card-img-top" src={logo9} alt="Cabbage"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Cabbage</h5>
//                             <p class="card-text-1">Almost stock out!</p>
//                             <a href="/Vagitable" class="btn btn-primary">Check status</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm">
//                     <div class="card">
//                         <img class="card-img-top" src={logo10} alt="Carrots"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Carrots</h5>
//                             <p class="card-text-1">Almost stock out!</p>
//                             <a href="/Vagitable" class="btn btn-primary">Check status</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm">
//                     <div class="card">
//                         <img class="card-img-top" src={logo11} alt="Spinach"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Spinach</h5>
//                             <p class="card-text-1">Almost stock out!</p>
//                             <a href="/Vagitable" class="btn btn-primary">Check status</a>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-sm">
//                     <div class="card">
//                         <img class="card-img-top" src={logo12} alt="Green bean"/>
//                         <div class="card-body">
//                             <h5 class="card-title">Green bean</h5>
//                             <p class="card-text-1">Almost stock out!</p>
//                             <a href="/Vagitable" class="btn btn-primary">Check status</a>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>
            
            
//         </div>
    
//     </>
//   )
// }

// export default Stocksection
