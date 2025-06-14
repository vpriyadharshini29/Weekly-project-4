
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import './App.css';
import GroceryList from './assets/Components/Project1';
import LoginToggle from './assets/Components/Project2';
import AgeCard from './assets/Components/Project3';
import CharacterCounter from './assets/Components/Project4';
import FruitSelector from './assets/Components/Project5';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <h2>React Projects</h2>
          <ul>
            <li><Link to="/">Grocery List</Link></li>
            <li><Link to="/login">Login Toggle</Link></li>
            <li><Link to="/age">Age Increaser</Link></li>
            <li><Link to="/counter">Character Counter</Link></li>
            <li><Link to="/fruit">Fruit Selector</Link></li>
          </ul>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<GroceryList />} />
            <Route path="/login" element={<LoginToggle />} />
            <Route path="/age" element={<AgeCard name="Priya" />} />
            <Route path="/counter" element={<CharacterCounter />} />
            <Route path="/fruit" element={<FruitSelector />} />
          </Routes>
        </div>
        
      </div>
    </Router>
    
  );
}

export default App;
