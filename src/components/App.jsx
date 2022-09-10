import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ConfigContext from "../assets/ConfigContext";

export default function App() {
    const [token, setToken] = useState("");

    return (
        <ConfigContext.Provider value = {{token, setToken}} >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/carteira" element={<Carteira/>} />
                <Route path="/movimento" element={<Movimento />} />
            </Routes>
        </BrowserRouter>
         </ConfigContext.Provider>
    )
}