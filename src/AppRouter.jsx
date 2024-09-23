import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/home/home";
import Lobby from './pages/lobby/lobby'
function AppRouter() {
  const userId = 12;
  
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Lobby />} />
        {/* <Route path="/" element={<Navigate to={`/user/${userId}`} />} /> */}
        <Route path="/user/:userId" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
