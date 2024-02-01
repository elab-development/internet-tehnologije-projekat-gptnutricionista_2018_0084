import React from 'react';

const MealRow = ({ meal, onClick }) => {
  return (
    <tr key={meal.id}>
      <td>{meal.name}</td>
      <td>{meal.description}</td>
      <td>{meal.time_of_day}</td>
      <td>
        <button onClick={onClick}>Detalji</button>
      </td>
    </tr>
  );
};

export default MealRow;
