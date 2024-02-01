import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';

const DietPlanGenerator = () => {
    const [formData, setFormData] = useState({
        user_id: '1',  //kreiracemo ovo uvek za usera sa idijem 1, kasnije za seminarski rad cemo prepraviti da ovo bude id ulogovanog usera
        period: '7',
        preferences: 'vegeterian',
        total_calories: '3000'
    });
    const [dietPlan, setDietPlan] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const formatDietPlan = (plan) => {
        return plan.split('\n').map((line, index) => {
            if (line) {
                return <p key={index}>{line}</p>;
            }
            return null;
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/dietPlans/kreirajPlanGPT', formData);
            setDietPlan(formatDietPlan(response.data.choices[0].message.content));
        } catch (error) {
            console.error('There was an error generating the diet plan', error);
        }
    }

    return (
        <div className="diet-plan-generator">
            <form onSubmit={handleSubmit}> 
            <InputField
                name="period"
                placeholder="Period (days)"
                value={formData.period}
                onChange={handleChange}
                />
                <InputField
                name="preferences"
                placeholder="Preferences"
                value={formData.preferences}
                onChange={handleChange}
                />
                <InputField
                name="total_calories"
                placeholder="Total Calories"
                value={formData.total_calories}
                onChange={handleChange}
                />
                <button type="submit">Generate Diet Plan</button>
            </form>

            {dietPlan && (
                <div className="diet-plan">
                    <pre> {dietPlan} </pre>
                </div>
            )}
        </div>
    );
}

export default DietPlanGenerator;
