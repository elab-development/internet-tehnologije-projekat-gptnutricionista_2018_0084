 
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DietPlanGenerator from './komponente/gpt/DietPlanGenerator';
import Meals from './komponente/meals/Meals';
import Detalji from './komponente/meals/detalji/Detalji';
import Navbar from './komponente/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar></Navbar>
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
