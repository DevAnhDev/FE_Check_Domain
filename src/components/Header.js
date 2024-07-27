// src/components/Header.js
import React from 'react';
import { Layout, Typography } from 'antd';
// import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => {
  return (
    <Header className="header">
      <div className="logo">
        {/* <img src="/assets/logo.png" alt="Company Logo" style={{ height: '32px', marginRight: '16px' }} /> */}
        <Title level={3} style={{ color: 'white', display: 'inline-block', margin: 0 }}>Tool check domain</Title>
      </div>
    </Header>
  );
};

export default AppHeader;
