import React from 'react';
import { useParams } from 'react-router-dom';
import foodItemsData from '../data/foodItemsData';
import '../styles/FoodDetails.css';

const FoodDetails = () => {
  const { id } = useParams();
  const currentItem = foodItemsData.find(item => item.id === parseInt(id));

  if (!currentItem) {
    return <h2>Item not found</h2>;
  }

  const similarItems = foodItemsData.filter(item => item.id !== parseInt(id)).slice(0, 3);

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6 ">
          <img
            src={currentItem.image}
            alt={currentItem.name}
            className="img-fluid rounded shadow mb-4"
            style={{ maxWidth: '60%', height: 'auto' }}
          />
        </div>

        <div className="col-md-6">
          <h2>{currentItem.name}</h2>
          <p>{currentItem.description}</p>

          <div className="mb-3">
            <button className="btn btn-primary me-2">
              <a href={`https://www.swiggy.com/restaurants/litteez-sriram-nagar-nanakramguda-hyderabad-838880`} className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                Swiggy
              </a>
            </button>
            <button className="btn btn-danger">
              <a href={`https://www.zomato.com/hyderabad/litteez-kondapur/order`} className="text-white text-decoration-none" target="_blank" rel="noopener noreferrer">
                Zomato
              </a>
            </button>
          </div>
        </div>
      </div>

      <h3 className="mt-5">Similar Items</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {similarItems.map(item => (
          <div key={item.id} className="col">
            <a href={`/food/${item.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodDetails;
