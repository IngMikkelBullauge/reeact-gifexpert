import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'

// Assets
import './assets/style.css'

// Organigrama
/**
 * Estructura de la app
 *  ./main.jsx
 *    ./GifExpertApp.jsx
 *      ./components/AddCategory.jsx
 *      ./components/GifGrid.jsx
 *        ../hooks/useFetchGifs.js
 *          ../helpers/getGifs
 *        ./GifGridItem.jsx
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>,
)
