import React, { Fragment, Suspense } from 'react'
import { Skeleton } from 'antd'
import BasicLayout from './layout'
import routes from '@/router'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router } from 'react-router-dom'

function App () {
  return (
    <Fragment>
      <Router>
        <BasicLayout>
          <Suspense fallback={<Skeleton active />}>{renderRoutes(routes)}</Suspense>
        </BasicLayout>
      </Router>
    </Fragment>
  )
}

export default App
