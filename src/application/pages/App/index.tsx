import React from 'react'

import useStyles from './styles'

const App: React.FC = () => {
  const classes = useStyles()

  return <div className={classes.root}>Hello World</div>
}

export default App
