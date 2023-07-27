import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
  },
  {
    path: "/home",
    element: <App/>,
  },
  {
    path: "/categories",
    element: <div>Categories</div>,
  },
  {
    path: "/deals",
    element: <div>Deals</div>,
  },
  {
    path: "/new-items",
    element: <div>New Additions</div>,
  },
  {
    path: "/account",
    element: <div>Account</div>,
  },
  {
    path: "/cart",
    element: <div>Cart</div>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);


