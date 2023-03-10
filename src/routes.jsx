import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Informacoes from "./pages/Informacoes"
import Montagem from "./pages/Montagem";
import Crud from "./pages/Crud";
import Settings from "./pages/Settings"
import Manual from "./pages/Manual"
import Carregamento from "./pages/Carregamento"
import { BoxLoginMk } from "./components/screen-login-mk/BoxLoginMk";


export const RoutesJS = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:id?" element={<Carregamento />} />
        <Route path="/informacoes/:id?" element={<Informacoes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/montagem" element={<Montagem />} />
        <Route path="/Crud" element={<Crud />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/login" element={<BoxLoginMk />} />
        <Route path="/cadastro-manual" element={<Crud />} />
      </Routes>
    </BrowserRouter>
  )
}