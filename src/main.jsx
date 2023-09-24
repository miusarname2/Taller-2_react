import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home';
import Point1 from './components/Point1';
import Point2 from './components/Point2';
import Point3 from './components/Point3';
import Point4 from './components/Point4';
import Point5 from './components/Point5';
import Point6 from './components/Point6';
import Point7 from './components/Point7';
import Point8 from './components/Point8';
import Point9 from './components/Point9';
import Point10 from './components/Point10';
import { createBrowserRouter,RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },{
    path:"/point1",
    element: <Point1/>
  },{
    path:"/point2",
    element:<Point2/>
  },{
    path:"/point3",
    element: <Point3/>
  },{
    path:"/point4",
    element: <Point4/>
  },{
    path:"/point5",
    element: <Point5/>
  },{
    path:"/point6",
    element: <Point6/>
  },{
    path:"/point7",
    element: <Point7/>
  },{
    path:"/point8",
    element: <Point8/>
  },{
    path:"/point9",
    element: <Point9/>
  },{
    path:"/point10",
    element: <Point10/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
