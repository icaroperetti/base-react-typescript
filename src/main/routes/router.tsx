import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App } from '../../application/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router