import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Mission from './pages/Mission';
import Profile from './pages/Profile';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="Missions" element={<Mission />} />
      <Route path="My-Profile" element={<Profile />} />
    </Routes>
  </>
);

export default App;
