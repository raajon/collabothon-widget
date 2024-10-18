import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './page/PageLayout';
import Dashboard from './page/Dashboard';
import Sandbox from './page/Sandbox';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="sandbox" element={<Sandbox />} />
          <Route path="*" element={<Sandbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>
);

export default App;