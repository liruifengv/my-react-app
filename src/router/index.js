import React from 'react'
import { Redirect } from 'react-router-dom'
const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Login'))
const Test = React.lazy(() => import('@/pages/Test/index'))
const List = React.lazy(() => import('@/pages/Test/childPage/List'))
const Detail = React.lazy(() => import('@/pages/Test/childPage/Detail'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))
const Posts = React.lazy(() => import('@/pages/Posts/Posts'))
/* eslint-disable */
const toRedirect = () => {
  return (
    <Redirect to='/Home' />
  )
}

const toNotFound = () => {
  return (
    <Redirect to='/404' />
  )
}

const routes = [
  { path: '/', exact: true, render: toRedirect },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  {
    path: '/test',
    component: Test,
    routes: [
      {
        path: '/test',
        exact: true,
        render: () => <Redirect to="/test/List" />
      },
      { path: '/test/list', component: List },
      { path: '/test/detail', component: Detail }
    ]
  },
  { path: '/posts', component: Posts },
  { path: '/404', component: NotFound },
  { path: '*', render: toNotFound }
]

export default routes
