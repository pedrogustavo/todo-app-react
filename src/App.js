import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('./views/Home'))
const State = loadable(() => import('./views/State'))

function App () {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/state' component={State} />
                    <Route path='/' component={Home} />
                </Switch>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/state'>State</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </Router>
       </div>
  )
}

export default App
