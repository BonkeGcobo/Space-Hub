import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Profile from './pages/Profile';
import MissionList from './components/MissionList';
import { getMissions } from './redux/Missions/missions';
import { getRockets } from './redux/rockets/rockets';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRockets());
  }, []);
  const missions = useSelector((state) => state.missionsReducer);
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
