import React, { Suspense } from 'react'
import { Skeleton } from 'antd'
import BasicLayout from './layout'
import routes from '@/router'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <Router>
      <BasicLayout>
        <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense>
      </BasicLayout>
    </Router>
  )
}

export default App
