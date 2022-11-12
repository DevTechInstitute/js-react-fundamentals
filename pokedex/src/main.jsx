import React from 'react'
import ReactDOM from 'react-dom/client'
import { PokemonProvider } from '../context/PokemonProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokemonProvider>

      <App />
    </PokemonProvider>
  </React.StrictMode>
)
