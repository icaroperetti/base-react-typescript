import React from 'react'
import { Header, Sidebar, ContentApp } from '../../components'
import { DashboardProvider } from '../../hooks'

import useStyles from './styles'

const App: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <DashboardProvider>
        <Header />
        <Sidebar />
      </DashboardProvider>
      <ContentApp />
    </div>
  )
}

export default App
