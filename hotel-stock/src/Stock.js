import React from 'react';
import logoc5 from '../src/image/logoc5.png';
import logoc6 from '../src/image/logoc6.jpg';
import logoc7 from '../src/image/logoc7.jpg';
import logoc8 from '../src/image/logoc8.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

const Stock = () => {
  return (
    <>
      <h2>Category</h2>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img className="card-img-top" src={logoc5} alt="Vegetables" />
              <div className="card-body">
                <h5 className="card-title">Vegetables</h5>
                <h6 className="card-subtitle mb-2 text-muted">Vegetables section</h6>
                <a href="/Vagitable" className="btn btn-primary">
                  Check status
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img className="card-img-top" src={logoc6} alt="Dairy Products" />
              <div className="card-body">
                <h5 className="card-title">Dairy Products</h5>
                <h6 className="card-subtitle mb-2 text-muted">Dairy Product section</h6>
                <a href="/dairy" className="btn btn-primary">
                  Check status
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img className="card-img-top" src={logoc7} alt="Spices" />
              <div className="card-body">
                <h5 className="card-title">Spices</h5>
                <h6 className="card-subtitle mb-2 text-muted">Spices section</h6>
                <a href="/Spice" className="btn btn-primary">
                  Check status
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card">
              <img className="card-img-top" src={logoc8} alt="Fruits" />
              <div className="card-body">
                <h5 className="card-title">Fruits</h5>
                <h6 className="card-subtitle mb-2 text-muted">Fruits section</h6>
                <a href="/Fruit" className="btn btn-primary">
                  Check status
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stock;
