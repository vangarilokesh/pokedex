import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import afterLogin from "./screens/afterLogin/afterLogin"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login/Login';
import SignUp from './screens/SignUp/SignUp';
const App=()=> (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/myCollections" element={<myCollections/>}/>
      <Route path="/afterLogin" element={<afterLogin/>}/>
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;