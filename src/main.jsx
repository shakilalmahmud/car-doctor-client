import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Components/Layout.jsx';
import Home from './Components/Home/Home.jsx';
import { Providers } from './Providers';
import ServiceDetails from './Components/service details/ServiceDetails';
import Services from './Components/Home/Services';
import Contact from './Components/Home/Contact';
import Registration from './Components/Registration/Registration';
import NewService from './Components/NewService/NewService';
import CheckOut from './Components/Handle Orders/CheckOut';
import Errorpage from './Components/Errorpage';
import Orderlist from './Components/Handle Orders/Orderlist';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/services/:id',
        element: <ServiceDetails ></ServiceDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/services/${params.id}`)
        }
      },
      {
        path: '/services',
        element: <Services></Services>,
        loader: () => fetch('http://localhost:3000/services')

      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/signup',
        element: <Registration></Registration>
      },
      {
        path: '/addnewservice',
        element: <NewService></NewService>
      },
      {
        path: '/services/checkout/:id',
        element: <CheckOut></CheckOut>,
        loader: ({ params }) => {
          return fetch(`http://localhost:3000/services/${params.id}`)

        }

      },
      {
        path: '/orderlist',
        element: <Orderlist></Orderlist>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className='max-w-screen-xl mx-auto text-center px-10'>
        <Providers>
          <RouterProvider router={router} />
        </Providers>
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
