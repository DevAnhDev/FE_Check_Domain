// src/layouts/MainLayout.js
import React, { useEffect } from 'react';
import { Layout } from 'antd';
import AppHeader from '../Header';
import AppFooter from '../Footer';
import Sidebar from '../Sidebar';
const { Content } = Layout;
const MainLayout = ({ children }) => {
  // useEffect(() => {
  //   console.log("chay ne")
  // }, [])
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content style={{ padding: 24, margin: 0, minHeight: 'calc(100vh - 64px - 70px)' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
      <AppFooter />
    </Layout>
  );
};

export default MainLayout;
