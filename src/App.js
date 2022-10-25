import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="p-2">
    
      <Router>

        <Routes>
        <Route exact path="" element={<LandingPage/>}></Route>
        <Route exact path="/LoginPage" element={<LoginPage />}></Route>
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
