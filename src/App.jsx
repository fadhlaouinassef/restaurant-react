import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Utilisateur from './Pages/Utilisateur';
import Admin from "./Pages/Admin";
import Create from './AdminDashboard/Create';
import UpdatePlat from './AdminDashboard/UpdatePlat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Utilisateur />} />
        <Route path="/utilisateur" element={<Utilisateur />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<UpdatePlat />} />
      </Routes>
    </Router>
  );
};

export default App;
