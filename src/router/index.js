import React from 'react'
import { Redirect } from 'react-router-dom'
const Home = React.lazy(() => import('@/pages/Home'))
const Login = React.lazy(() => import('@/pages/Login'))
const Test = React.lazy(() => import('@/pages/Test'))
const NotFound = React.lazy(() => import('@/pages/NotFound'))
const Posts = React.lazy(() => import('@/pages/Posts/Posts'))

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
  { path: '/test', component: Test },
  { path: '/posts', component: Posts },
  { path: '/404', component: NotFound },
  { path: '*', render: toNotFound }
]

export default routes
