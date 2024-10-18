import React from 'react';
import { Button, ConfigProvider } from 'antd';

const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#00b96b' } }}>
    <Button type="primary">Button</Button>
  </ConfigProvider>
);

export default App;