import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

const { Header, Footer, Sider, Content } = Layout
// 引入子菜单组件
const SubMenu = Menu.SubMenu

const BasicLayout = (props) => {
  const children = props.children
  const history = useHistory()
  // 菜单点击，跳转路由
  const clickMenu = ({ key }) => {
    history.push(`/${key}`)
  }

  return (
    <Layout>
    <Sider width={256} style={{ minHeight: '100vh' }}>
      <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }}/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={clickMenu}>
        <Menu.Item key="home">
          <Icon type="pie-chart" />
          <span>Helloworld</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
        >
           <Menu.Item key="login">login</Menu.Item>
           <Menu.Item key="test">test</Menu.Item>
           <Menu.Item key="posts">post</Menu.Item>
           <Menu.Item key="other">other</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Layout >
      <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2021 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  )
}

BasicLayout.propTypes = {
  children: PropTypes.any.isRequired
}

export default BasicLayout
