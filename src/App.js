import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Habits from "./components/Habits";
import Today from "./components/Today";
import History from "./components/History";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';


export default function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
    return (
      <BrowserRouter>
      <Navbar userInfo={userInfo}/>
          <Routes>
          <Route path="/" element={<Login setToken={setToken} setUser={setUser}/>} />
          <Route path="/cadastro" element={<Register/>} />
          <Route path="/habitos" element={<Habits/>}/>
          <Route path="/hoje" element={<Today/>} />
          <Route path="/historico" element={<History/>} />
        </Routes>
        <Footer userInfo ={userInfo}/>
      </BrowserRouter>
    );
  }
  