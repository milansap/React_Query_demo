import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  InfoCircleOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const LayoutData = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <NavLink to="/">Home</NavLink>,
            },
            {
              key: "2",
              icon: <InfoCircleOutlined />,
              label: <NavLink to="/about">About</NavLink>,
            },
            {
              key: "3",
              icon: <MessageOutlined />,
              label: <NavLink to="/contact">Contact</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default LayoutData;
