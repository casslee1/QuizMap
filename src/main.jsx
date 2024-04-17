import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './Routes/App';
import Game from './Routes/Game';
import About from './Routes/About';
import Results from './Routes/Results';
import './Styles/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "game",
    element: <Game />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "results",
    element: <Results />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);
