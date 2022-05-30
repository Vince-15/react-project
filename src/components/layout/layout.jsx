import './layout.css'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { useState } from 'react'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import menuRouter from '../../router/menuRouter'

const { Header, Sider, Content } = Layout

const App = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const selectMenu = ({ key }) => {
    navigate(key)
  }
  const menus = menuRouter.map((item) => ({
    key: item.path,
    label: item.name,
    icon: item.icon,
  }))

  const selectedKeys = [location.pathname === '/main' ? '' : location.pathname]
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={selectMenu}
          items={menus}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <span>header</span>
        </Header>

        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <div>
            <Outlet></Outlet>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
