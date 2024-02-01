import React from 'react';

const FoodItem = ({ item }) => {
  return (
    <div className="food-item">
      <p>{item.name}</p>
      <p>Količina: {item.quantity} {item.unit}</p>
      <p>Kalorije po jedinici: {item.calories_per_unit}</p>
    </div>
  );
};

export default FoodItem;
