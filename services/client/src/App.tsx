import React from 'react';
import AppRoutes from '@core/app-routes';
import { ConfigProvider } from 'antd';
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const frontendApi = import.meta.env.VITE_REACT_APP_CLERK_FRONTEND_API?.toString();

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
        <ClerkLoaded>
          <ConfigProvider direction="rtl">
            <AppRoutes />
          </ConfigProvider>
        </ClerkLoaded>
      </ClerkProvider>
    </div>
  );
};

export default App;
