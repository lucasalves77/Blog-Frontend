import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Html from "./routes/Html";
import Css from "./routes/Css";
import Javascript from "./routes/Javascript";
import Node from "./routes/Node";
import Reactjs from "./routes/React";
import Vue from "./routes/Vue";
import Angular from "./routes/Angular";
import Git from "./routes/Git";
import Sass from "./routes/Sass";
import Less from "./routes/Less";
import Webpack from "./routes/Webpack";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "html",
        element: <Html/>,
      },
      {
        path: "css",
        element: <Css/>,
      },
      {
        path: "javascript",
        element: <Javascript/>,
      },
      {
        path: "node",
        element: <Node/>,
      },
      {
        path: "react",
        element: <Reactjs/>,
      },
      {
        path: "vue",
        element: <Vue/>,
      },
      {
        path: "angular",
        element: <Angular/>,
      },
      {
        path: "git",
        element: <Git/>,
      },
      {
        path: "Sass",
        element: <Sass/>,
      },
      {
        path: "less",
        element: <Less/>,
      },
      {
        path: "webpack",
        element: <Webpack/>,
      },
    ],
  }, 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
