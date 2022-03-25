import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'

const BASENAME = '/joskapotin_12_04032022'

/**
 * Rendering the App component to the DOM.
 */
ReactDOM.render(
  <React.StrictMode>
    <Router basename={BASENAME}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
