import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./pages/main/index";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/hg-landing-page/",
    element: <MainPage />,
  },
]);

ReactDOM.cr

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
