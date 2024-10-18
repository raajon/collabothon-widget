import React from 'react';
import { ConfigProvider } from 'antd';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom';
import PageLayout, { menuLoader } from './page/PageLayout';
import Dashboard, { dashboardLoader } from './page/Dashboard';
import Sandbox from './page/Sandbox';

const App: React.FC = () =>{
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout/>} loader={menuLoader}>
        <Route index element={<Sandbox/>} />
        <Route path="/dashboard/:id" element={<Dashboard/>} loader={dashboardLoader} />
        <Route path="sandbox" element={<Sandbox />} />
        <Route path="*" element={<Sandbox />} />
      </Route>
  ))


  return(
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
};

export default App;