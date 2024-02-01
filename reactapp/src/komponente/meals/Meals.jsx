import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MealRow from './MealRow';  
import ReactPaginate from 'react-paginate';
const palette = {  //paleta boja koja se koristi za css
    primary: '#c9c9ee',
    secondary: '#baabbd',
    tertiary: '#9f838c',
    quaternary: '#8d7471',
    quinary: '#816f68',
  };
const Meals = () => {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const mealsPerPage = 5; // Broj obroka po stranici
  const pageCount = Math.ceil(meals.length / mealsPerPage);
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

  const handlePageClick = (data) => {  //poziva se kada korisnik klikne dugme za paginaciju
    setCurrentPage(data.selected);
  };
 //obracunava od kog do kog indeksa treba da prikazemo elemente za paginaciju
  const offset = currentPage * mealsPerPage;
  const currentMeals = meals.slice(offset, offset + mealsPerPage);
  return (
    <div className="meals-container" style={{ backgroundColor: palette.primary }}>
      <h1 style={{ color: palette.quaternary }}>Obroci</h1>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel="<"
        nextLabel=">"
        />

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
          {currentMeals.map((meal) => (
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
