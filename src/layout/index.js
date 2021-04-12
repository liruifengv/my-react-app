import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'

const { Header, Sider, Content } = Layout

const BasicLayout = (props) => {
  const children = props.children
  const [collapsed, setCollapsed] = useState(false)

  const history = useHistory()
  // 菜单点击，跳转路由
  const clickMenu = ({ key }) => {
    history.push(`/${key}`)
  }

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout>
    <Sider width={256} trigger={null} style={{ minHeight: '100vh' }} collapsible collapsed={collapsed}>
      <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }}/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={clickMenu}>
        <Menu.Item key="home" icon={<UserOutlined />}>
          <span>Helloworld</span>
        </Menu.Item>
        <Menu.Item key="login" icon={<VideoCameraOutlined />}>
          login
        </Menu.Item>
           <Menu.Item key="test" icon={<UploadOutlined />}>test</Menu.Item>
           <Menu.Item key="posts" icon={<UploadOutlined />}>post</Menu.Item>
      </Menu>
    </Sider>
    <Layout >
      <Header style={{ background: '#fff', padding: '0 20px' }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle
      })}
      </Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {children}
        </div>
      </Content>
    </Layout>
    </Layout>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default BasicLayout
