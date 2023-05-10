import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import CharacterInfo from './components/CharacterInfo.jsx'

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/character/:characterid",
    element: <CharacterInfo></CharacterInfo>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={AppRouter}/>
  </>,
)
