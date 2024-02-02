import React from 'react'
import logoc5 from '../src/image/logoc5.png'
import logoc6 from '../src/image/logoc6.jpg'
import logoc7 from '../src/image/logoc7.jpg'
import logoc8 from '../src/image/logoc8.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import'./home.css';
const Category = () => {
  return (
   <>
    <h2>Category</h2><hr/>
      <div class="container">
  <div class="row">
    <div class="col-sm">
      <div className="card">
    <img class="card-img-top" src={logoc5} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Vegetables</h5>
            <h6 className="card-subtitle mb-2 text-muted">Vegetables section</h6>
            <p className="card-text"></p>
            <a href="/Vagitable" className="card-link"><button class="btn btn-primary">View More</button></a>
            
        </div>
</div>
    </div>
    <div class="col-sm">
      <div className="card">
    <img class="card-img-top" src={logoc6} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Dairy Product</h5>
            <h6 className="card-subtitle mb-2 text-muted">Dairy Product section</h6>
            <p className="card-text"></p>
            <a href="/Dairy" className="card-link"><button class="btn btn-primary">View More</button></a>
            
        </div>
</div>
    </div>
    <div class="col-sm">
      <div className="card">
    <img class="card-img-top" src={logoc7} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Spices</h5>
            <h6 className="card-subtitle mb-2 text-muted">Spices section</h6>
            <p className="card-text"></p>
            <a href="/Spice" className="card-link"><button class="btn btn-primary">View More</button></a>
            
        </div>
    </div>
    </div>
    <div class="col-sm">
      <div className="card">
    <img class="card-img-top" src={logoc8} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Fruits</h5>
            <h6 className="card-subtitle mb-2 text-muted">Fruits section</h6>
            <p className="card-text"></p>
            <a href="/Fruit" className="card-link"><button class="btn btn-primary">View More</button></a>
            
        </div>
    </div>
    </div>
    
  </div>
    </div>
   </>
  )
}

export default Category
