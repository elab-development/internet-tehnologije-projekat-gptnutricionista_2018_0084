import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MealRow from './MealRow';  

const Meals = () => {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);
  const palette = {
    primary: '#c9c9ee',
    secondary: '#baabbd',
    tertiary: '#9f838c',
    quaternary: '#8d7471',
    quinary: '#816f68',
  };

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/meals');
        setMeals(response.data.data);
      } catch (error) {
        console.error('Greška pri dobijanju obroka:', error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <div className="meals-container" style={{ backgroundColor: palette.primary }}>
      <h1 style={{ color: palette.quaternary }}>Obroci</h1>
      <table className="meals-table">
        <thead>
          <tr>
            <th>Ime</th>
            <th>Opis</th>
            <th>Vreme obroka</th>
            <th>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <MealRow
              key={meal.id}
              meal={meal}
              onClick={() => navigate(`/meals/${meal.id}`)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meals;
