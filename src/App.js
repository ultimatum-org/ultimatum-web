import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import WalletPage from './pages/wallet'
import DocumentationPage from './pages/documentation'
import Contribute from './pages/contribute'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/wallet" component={WalletPage} exact/>
                <Route path="/documentation" component={DocumentationPage} exact/>
                <Route path="/contribute" component={Contribute} exact/>
            </Switch>
        </Router>
    )
}

export default App