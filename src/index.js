import '@babel/polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './app.css'

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(<App />, root)
