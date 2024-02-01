 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DietPlanGenerator from './komponente/gpt/DietPlanGenerator';
import Meals from './komponente/meals/Meals';
import Detalji from './komponente/meals/detalji/Detalji';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DietPlanGenerator></DietPlanGenerator>}></Route>
          <Route path="/meals/:id" element={<Detalji></Detalji>}></Route>
          <Route path="/meals" element={<Meals></Meals>}></Route>
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
