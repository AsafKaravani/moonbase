import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import { HomePage } from '@components/pages/home-page';
import { LoginPage } from '@components/pages/login-page';
import { Shell } from '@components/pages/shell';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
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

export default AppRoutes;
