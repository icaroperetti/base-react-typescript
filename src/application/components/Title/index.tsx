import React, { memo } from 'react'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

const Title: React.FC = () => {
  const classes = useStyles()

  return (
    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
      Dashboard
    </Typography>
  )
}

export default memo(Title)
