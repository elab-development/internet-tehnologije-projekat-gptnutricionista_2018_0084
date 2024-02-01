 
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
                <h2>Hrana u obroku:</h2>
                {meal.food_items.map(item => (
                    <div key={item.id} className="food-item">
                        <p>{item.name}</p>
                        <p>Količina: {item.quantity} {item.unit}</p>
                        <p>Kalorije po jedinici: {item.calories_per_unit}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Detalji;
