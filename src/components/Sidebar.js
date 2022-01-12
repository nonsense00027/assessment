import React, { useState } from "react";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  CalendarOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useAuthContext } from "../contexts/AuthContext";

const { SubMenu } = Menu;

function Sidebar() {
  const { logout } = useAuthContext();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-60">
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        mode="inline"
        defaultSelectedKeys={["/"]}
        theme="dark"
        className="h-full"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="/" icon={<CalendarOutlined />}>
          Applications
        </Menu.Item>
        <Menu.Item key="/users" icon={<UserOutlined />}>
          Users
        </Menu.Item>
        <Menu.Item key="2" icon={<LogoutOutlined />} onClick={logout}>
          Logout
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
