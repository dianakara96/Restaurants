// src/components/Dashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from './DashboardLayout';
import UserList from './UserList';
import HotelList from './HotelList';
import RestaurantList from './RestaurantList';


const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="users" element={<UserList />} />
        <Route path="hotels" element={<HotelList />} />
        <Route path="restaurant" element={<RestaurantList />} />

      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
