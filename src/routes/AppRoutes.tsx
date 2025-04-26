import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeScreen from '../containers/home';
import CardsScreen from '../containers/cards';
import MainLayout from '../layout/MainLayout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomeScreen />
          </MainLayout>
        }
      />
      <Route
        path="/home"
        element={
          <MainLayout>
            <HomeScreen />
          </MainLayout>
        }
      />
      <Route
        path="/cards"
        element={
          <MainLayout>
            <CardsScreen />
          </MainLayout>
        }
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
