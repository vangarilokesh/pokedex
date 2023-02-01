import React from 'react'
import './App.css'
import Footer from "./components/Footer/Footer"
import LandingPage from "./screens/LandingPage/LandingPage"
import Header from "./components/Header/Header"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Login from './screens/Login/Login'
import SignUp from './screens/SignUp/SignUp';
import Home from './screens/Home/Home';
import Find from './screens/Find/Find';
import FirstScreen from './screens/FirstScreen/FirstScreen'
const App=()=> (
  <BrowserRouter>
    <Header/>
    <main>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/predict" element={<Find/>}></Route>
      <Route path="/fs" element={<FirstScreen/>}></Route>
      </Routes>
    </main>
    {/* <Footer /> */}
  </BrowserRouter>
);

export default App;