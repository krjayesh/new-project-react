import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Contactus from './views/contactus'
import Aboutus from './views/aboutus'
import Home from './views/home'
import Registernow from './views/registernow'
import Footer from './views/footer'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Contactus} path="/contactus" />
        <Route exact component={Aboutus} path="/aboutus" />
        <Route exact component={Home} path="/" />
        <Route exact component={Registernow} path="/registernow" />
        <Route exact component={Footer} path="/footer" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
