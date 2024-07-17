import React from 'react';
import { Link } from 'react-router-dom';
import foodItemsData from '../data/foodItemsData';

const Products = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Welcome to LITTEEZ</h2>
<div className='d-flex justify-content-center'>
  <p className='me-2 me-2'>Nanakrama Guda</p> 
  <p>|</p>
  <p className='ms-2 me-2'>Kondapur</p>
  <p>|</p>
  <p className='ms-2 me-2'>Madhapur</p>
</div>

      <div className="d-flex flex-column gap-4">
        {foodItemsData.map(item => (
          <Link key={item.id} to={`/food/${item.id}`} className="text-decoration-none text-dark">
            <div className="card flex-row h-100 shadow-sm">
              <img
                src={item.image}
                className="card-img-left"
                alt={item.name}
                style={{ objectFit: 'cover', width: '250px', height: '250px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <div className="d-flex align-items-center mb-2">
               
                  <span className="badge bg-warning text-dark">{item.rating} <i className="bi bi-star-fill"></i></span>
                  <p className='mt-3 ms-2'>{item.order}</p>
                </div>
                <div className="d-flex">
                  <a href={item.swiggyLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Swiggy</a>
                  <a href={item.zomatoLink} className="btn btn-danger ms-4" target="_blank" rel="noopener noreferrer">Zomato</a>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;

