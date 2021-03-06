import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router'
import { Route } from 'react-router'

import App from './App'

import './index.css'

//pages
import Home from './pages/Home'
import Search from './pages/Search'
import Movie from './pages/Movie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={ <App /> }>
          <Route path='/' element={ <Home /> } />
          <Route path="movie/:id" element={<Movie />} />
          <Route path='search' element={ <Search /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
