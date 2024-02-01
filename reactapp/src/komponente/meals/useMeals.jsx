 
import { useState, useEffect } from 'react';
import axios from 'axios';

const useMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/meals');
                setMeals(response.data.data);
                console.log(response.data.data)
            } catch (error) {
                console.error('Greška pri dobijanju obroka:', error);
            }
        };

        fetchMeals();
    }, []);

    return meals;
};

export default useMeals;
