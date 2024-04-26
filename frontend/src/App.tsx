import React, { Suspense } from "react";
import  { Routes, Route, Link } from "react-router-dom";

// Applicatio
import AppOutlet from "./components/layouts/AppOutlet";

import MainPage from "./pages/MainPage";

// Container
import ContainerListPage from "./pages/ContainerListPage";

function App() {
  return (
    <Routes>
        <Route path="/" element={<AppOutlet/>} >
            <Route index element={<MainPage />} />
            <Route path="container">
                <Route index element={<ContainerListPage />} />
            </Route>
        </Route>
    </Routes>
  )
}

export default App
