import React from 'react'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { MenuButton, HeaderTitle } from '../'
import { useDashboard } from '../../hooks'

import useStyles from './styles'

const Header: React.FC = ({ children }) => {
  const classes = useStyles()
  const { open } = useDashboard()

  return (
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <MenuButton />
        <HeaderTitle />
      </Toolbar>
    </AppBar>
  )
}

export default Header
