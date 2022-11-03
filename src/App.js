// import React,{useState,useEffect} from 'react';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CategoryPage from './pages/CategoryPage'

function App() {
  // const [user, setUser] = useState(null);
  // function onLogin(user) {
  //    setUser(user)
  // }

  // useEffect(()=>{
  //   fetch("http://localhost:3000/users/1")
  //   .then(res=>res.json()).then(data=>{
  //     setUser(data)
  //     console.log(user);
  //     onLogin(data)
  //   })
  // },[])

  // if (user) {
  //   console.log(user);
  //   return <LandingPage user={user}/>
  // } else {
  //   return <LoginPage onLogin={setUser} />;
  // }


  return (
    <div className="p-2">
      <Router>

        <Routes>
        <Route exact path="" element={<LandingPage/>}></Route>
        <Route exact path="/LoginPage" element={<LoginPage />}></Route>
        <Route exact path="/SignupPage" element={<SignupPage />}></Route>
        <Route exact path="/Category" element={<CategoryPage/>}></Route>
        </Routes>
        
      </Router>
    </div>
  )
}

export default App;