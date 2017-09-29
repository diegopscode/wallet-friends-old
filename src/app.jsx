import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'
import Header from './components/header'

import Home from './scenes/home'
import Friends from './scenes/friends'
import History from './scenes/history'

const App = () => (
    <Router>
        <section className="content-page">
        <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/friends" component={Friends} />
            <Route exact path="/history" component={History} />
        </section>
    </Router>
)

export default App;