import React from 'react'
import clsx from 'clsx'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { useDashboard } from '../../hooks'
import useStyles from './styles'

const App: React.FC = () => {
  const classes = useStyles()
  const { open, openSidebar } = useDashboard()
  const handleDrawerOpen = (): void => {
    openSidebar(true)
  }

  return (
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
    >
      <MenuIcon />
    </IconButton>
  )
}

export default App
