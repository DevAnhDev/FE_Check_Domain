// src/components/Sidebar.js
import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link} from 'react-router-dom';

import {
  LogoutOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;


const Sidebar = () => {
  // const router = useRoutes();
  const [collapsed, setCollapsed] = useState(false);


  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    // Xử lý đăng xuất ở đây
    console.log("Đã đăng xuất");
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={240} // Điều chỉnh chiều rộng của Sidebar
      onCollapse={toggleCollapsed}
    >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link  to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/guide">Guideline</Link>
        </Menu.Item>
        {/* <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item> */}
        <SubMenu key="domain" icon={<UploadOutlined />} title="Manager Domain">
          <Menu.Item key="4"> <Link to='/domains/list_domains'>List Domain</Link></Menu.Item>
          {/* <Menu.Item key="5"><Link to="/domains/add_domains">Add Domain</Link></Menu.Item> */}
        </SubMenu>
        <SubMenu key="telegram" icon={<UploadOutlined />} title="Manager Telegram">
          <Menu.Item key="6"> <Link to="/telegram/list_telegram">List Telegram</Link></Menu.Item>
          {/* <Menu.Item key="7"><Link to="/telegram/add_telegram">Add Telegram</Link></Menu.Item> */}
        </SubMenu>
        <Menu.Item key="8" icon={<VideoCameraOutlined />}>
          <Link to="/scan_domains">Scan Domain</Link>
        </Menu.Item>
      </Menu>
      {/* Nút Logout ở dưới Sidebar */}
      <div className="sidebar-footer">
        <Button
          type="primary"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          block // Để nút chiếm toàn bộ chiều rộng của Sidebar
        >
          Logout
        </Button>
      </div>
    </Sider>
  );
};

export default Sidebar;
