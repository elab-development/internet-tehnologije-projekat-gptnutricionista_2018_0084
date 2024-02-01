import React, { useState } from 'react';
import axios from 'axios';

const DietPlanGenerator = () => {
    const [formData, setFormData] = useState({
        user_id: '1',  //kreiracemo ovo uvek za usera sa idijem 1, kasnije za seminarski rad cemo prepraviti da ovo bude id ulogovanog usera
        period: '',
        preferences: '',
        total_calories: ''
    });
    const [dietPlan, setDietPlan] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/dietPlans/kreirajPlanGPT', formData);
            setDietPlan(response.data.choices[0].message.content);
        } catch (error) {
            console.error('There was an error generating the diet plan', error);
        }
    }

    return (
        <div className="diet-plan-generator">
            <form onSubmit={handleSubmit}> 
                <input
                    type="number"
                    name="period"
                    placeholder="Period (days)"
                    value={formData.period}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="preferences"
                    placeholder="Preferences"
                    value={formData.preferences}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="total_calories"
                    placeholder="Total Calories"
                    value={formData.total_calories}
                    onChange={handleChange}
                />
                <button type="submit">Generate Diet Plan</button>
            </form>

            {dietPlan && (
                <div className="diet-plan">
                    <pre>{JSON.stringify(dietPlan, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default DietPlanGenerator;
