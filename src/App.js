import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Profile from './pages/Profile';
import MissionList from './components/MissionList';
import { getMissions } from './redux/Missions/Missions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);
  const missions = useSelector((state) => state.missionReducer);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="Missions" element={<MissionList missions={missions} />} />
        <Route path="My-Profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
