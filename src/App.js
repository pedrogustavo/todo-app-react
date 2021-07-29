import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

// const Home = loadable(() => import('./views/Home'))
// const Binding = loadable(() => import('./components/ComponentClass'))
const State = loadable(() => import('./views/State'))

function App () {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    {/* <Route path='/state' component={State} />
                    <Route path='/binding' component={Binding} />
                    <Route path='/' component={Home} /> */}
                    <Route path='/' component={State} />
                </Switch>
            </Router>
       </div>
  )
}

export default App
