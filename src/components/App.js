import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Registering from "./Register";
import Habits from "./Habits/Habits";
import Today from "./Today";
import History from "./History";


export default function App() {
      
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/cadastro" element={<Registering/>} />
          <Route path="/habitos" element={<Habits/>}/>
          <Route path="/hoje" element={<Today/>} />
          <Route path="/historico" element={<History/>} />
        </Routes>
      </BrowserRouter>
    );
  }
  