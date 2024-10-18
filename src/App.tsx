import React from 'react';
import { ConfigProvider } from 'antd';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './page/PageLayout';
import Dashboard from './page/Dashboard';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="newpost" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </ConfigProvider>
);

export default App;