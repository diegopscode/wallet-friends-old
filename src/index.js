import React from 'react'
import { render } from 'react-dom'
import App from './app'

// Styles
import './scss/index'

import { BrowserRouter } from 'react-router-dom'

render(
    <App />,
    document.getElementById('root')   
)