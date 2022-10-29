import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [user, setUser] = useState(null);
  function onLogin(user) {
    setUser(user)
  }

  useEffect(() => {
    fetch("http://localhost:3000/users/1").then((response) => {
      if (response.ok) {
    response.json().then((user) => {
      setUser(user)
      
    });
      }
    });
  }, []);

  if (user) {
    console.log(user);
    return <LandingPage user={user}/>;
  } else {
    return <LoginPage onLogin={setUser} />;
  }
  return (
    <div className="p-2">
    
      <Router>

        <Routes>
        <Route exact path="" element={<LandingPage/>}></Route>
        <Route exact path="/LoginPage" element={<LoginPage />}></Route>
        <Route exact path="/SignupPage" element={<SignupPage />}></Route>
        </Routes>
      </Router>
    
      
    </div>
  );
}

export default App;
