import React from 'react';
import AppRoutes from '@core/app-routes';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <div className="App">
      <ConfigProvider direction="rtl">
        <AppRoutes />
      </ConfigProvider>
    </div>
  );
};

export default App;
