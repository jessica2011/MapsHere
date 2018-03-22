import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './viewHome/Home'
import Search from './viewSearch/SearchYMaps'
import Ruta from './View3'
// import Schedule from './Schedule'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/search' component={Search}/>
      <Route path='/SubirRuta' component={Ruta}/>
    </Switch>
  </main>
)

export default Main