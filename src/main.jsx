import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material'

// Pages and Assets
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Result from './pages/Result.jsx'
import './index.css'

// Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route exact path='/' element={<App />}>
    <Route path='/' element={<Home />} />
    <Route path='/result' element={<Result />} />
  </Route>
))

// MUI Default Font
const theme = createTheme({
  typography: {
    "fontFamily": `"Nunito", sans-serif`,
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} fallbackElement={<h1>Loading..</h1>} />
    </ThemeProvider>
  </React.StrictMode>
)
