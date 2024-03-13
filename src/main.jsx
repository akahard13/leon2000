import React from 'react';
import { createRoot } from 'react-dom'; // Importa createRoot desde react-dom, no desde react-dom/client
import App from './App.jsx';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import './index.css';
import Home from './containers/home/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/hey",
        element: <Home/>
      }
    ],
  },
]);
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
