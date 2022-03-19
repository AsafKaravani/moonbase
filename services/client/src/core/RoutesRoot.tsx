import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { HomePage } from '@components/pages/HomePage';
import { LoginPage } from '@components/pages/LoginPage';

const RoutesRoot = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="expenses" element={<LoginPage />} />
      <Route
        path="*"
        element={(
          <main style={{ padding: '1rem' }}>
            <p>עמוד לא קיים</p>
          </main>
      )}
      />
    </Routes>
  );
};

export default RoutesRoot;
