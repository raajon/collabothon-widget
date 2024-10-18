import React from 'react';
import { Button, ConfigProvider, Layout } from 'antd';
import Widget from './lib/Widget';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PageLayout from './page/PageLayout';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<PageLayout/>}>
          <Route index element={<Widget/>} />
          <Route path="newpost" element={<Widget />} />
          <Route path="*" element={<Widget />} />
        </Route>
      </Routes>
    </MemoryRouter>
  </ConfigProvider>
);

export default App;