import React from 'react';
import '../styles/FoodItem.css';

const FoodItem = ({ item }) => {
  return (
    <div className="food-item">
      <img src={item.image} alt={item.name} className="food-image" />
      <div className="food-details">
        <h3 className="food-name">{item.name}</h3>
        <p className="food-description">{item.description}</p>
        <p className="food-price">₹ {item.price}</p>
      </div>
    </div>
  );
};

export default FoodItem;


