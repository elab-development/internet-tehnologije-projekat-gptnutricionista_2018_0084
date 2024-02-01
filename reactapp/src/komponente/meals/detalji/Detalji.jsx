 
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import FoodItem from './FoodItem';

const Detalji = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/meals/${id}`);
                setMeal(response.data.data);
            } catch (error) {
                console.error('Greška pri dobijanju detalja obroka:', error);
            }
        };

        fetchMeal();
    }, [id]);

    if (!meal) {
        return <div>Učitavanje...</div>;
    }

    return (
        <div className="meal-details-container">
            <h1>{meal.name}</h1>
            <p><strong>Opis:</strong> {meal.description}</p>
            <p><strong>Vreme obroka:</strong> {meal.time_of_day}</p>
            <p><strong>Kalorije:</strong> {meal.calories}</p>
            <p><strong>Proteini:</strong> {meal.proteins} g</p>
            <p><strong>Ugljeni hidrati:</strong> {meal.carbs} g</p>
            <p><strong>Masti:</strong> {meal.fats} g</p>
            <div className="food-items">
                <h2>Sastojci</h2>
                {meal.food_items.map((item) => (
                    <FoodItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default Detalji;
