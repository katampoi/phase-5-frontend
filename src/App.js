import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  const [user, setUser] = useState(null);
  const [userId,setId]=useState()
  function onLogin(user) {
     setUser(user)
  }
  async function loggedUser(userId){
    await setId(userId)
  }

  // useEffect(()=>{
  //   fetch(`http://localhost:3000/users/${1}`)
  //   .then(res=>res.json()).then(data=>{
  //     setUser(data)
  //     console.log(data);
  //     onLogin(data)
  //   })
  // },[])

  // if (user===null || user===undefined){
  //   console.log(user);
  //   return <LandingPage />
  // } else  {
  //   return <LandingPage user={user}/>;
  // }


  return (
    <div className="p-2">
      <BrowserRouter>

        <Routes>
        <Route exact path="/Landing" element={<LandingPage />}/>
        <Route exact path="/LoginPage" element={<LoginPage loggedUser={loggedUser} />}/>
        <Route exact path="/SignupPage" element={<SignupPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;