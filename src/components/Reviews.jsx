
import React from 'react';
import '../styles/Reviews.css';

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    date: "June 15, 2024",
    text: "The Margherita Pizza was amazing! The crust was perfect and the toppings were fresh. Highly recommend!"
  },
  {
    name: "Jane Smith",
    rating: 4,
    date: "June 14, 2024",
    text: "Loved the Spaghetti Carbonara. The sauce was creamy and the pancetta added a nice flavor. Will order again!"
  },
  {
    name: "Emily Johnson",
    rating: 5,
    date: "June 13, 2024",
    text: "The Tiramisu was out of this world! Perfect balance of coffee and sweetness. A must-try dessert."
  },
  {
    name: "Michael Brown",
    rating: 3,
    date: "June 12, 2024",
    text: "The Fresh Lemonade was refreshing, but a bit too sour for my taste. Overall, a good drink."
  },
  {
    name: "Sarah Wilson",
    rating: 2,
    date: "June 11, 2024",
    text: "The Nachos were soggy and lacked flavor. Not what I expected."
  },
  {
    name: "David Lee",
    rating: 4,
    date: "June 10, 2024",
    text: "The Grilled Chicken was cooked perfectly, but the sides were a bit bland."
  },
  {
    name: "Anna Kim",
    rating: 5,
    date: "June 9, 2024",
    text: "Absolutely loved the Chocolate Lava Cake. It was warm and gooey inside. Perfect!"
  },
  {
    name: "Chris Evans",
    rating: 1,
    date: "June 8, 2024",
    text: "The Beef Steak was overcooked and tough. Very disappointing."
  },
  {
    name: "Laura Martinez",
    rating: 3,
    date: "June 7, 2024",
    text: "The Iced Coffee was okay, but I've had better. It was a bit too sweet for my taste."
  },
  {
    name: "James Taylor",
    rating: 4,
    date: "June 6, 2024",
    text: "The Smoothie was refreshing and had a good mix of fruits. Would order again."
  }
];

const Reviews = () => {
  return (
    <div className="reviews">
      <h1 className='text-center mb-5'>Customer Reviews</h1>
      

<div className='cards-cont'>

      {reviews.map((review, index) => (
        <div key={index} className="review-card">
          <div className="review-header">
            <h3>{review.name}</h3>
            <div className="rating-date">
              <div className="rating">
                {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
              </div>
              <div className="date">{review.date}</div>
            </div>
          </div>
          <p>{review.text}</p>
        </div>

      ))}
</div>      
    </div>
  );
};

export default Reviews;