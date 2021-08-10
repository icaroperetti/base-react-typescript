import React from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { useDashboard } from '../../hooks'

import useStyles from './styles'

const Sidebar: React.FC = () => {
  const classes = useStyles()
  const { open, openSidebar } = useDashboard()
  const handleDrawerClose = (): void => {
    openSidebar(false)
  }

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <Divider />
    </Drawer>
  )
}

export default Sidebar
