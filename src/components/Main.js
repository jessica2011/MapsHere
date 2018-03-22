import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './viewHome/Home'
import Search from './viewSearch/SearchYMaps'
// import Schedule from './Schedule'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search' component={Search}/>
    </Switch>
  </main>
)

export default Main