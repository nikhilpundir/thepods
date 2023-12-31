import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import store from './store';
import { Provider } from 'react-redux';

import {About, Contact, HomeView,LoginView,SignupView,Profile, OTPVerification, BookingPage, PaymentSuccess} from './views/index.js'
import ProtectedRoute from "./utils/ProtectedRoute";

const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'',
        element:<HomeView />,
        children:[]
      },
      {
        path:'login',
        element:<LoginView />,
        children:[]
      },
      {
        path:'register',
        element:<SignupView />,
        children:[]
      },
      {
        path:'contact',
        element:<Contact />,
        children:[]
      },
      {
        path:'about',
        element:<About />,
        children:[]
      },
      {
        path: 'profile',
        element: <ProtectedRoute element={<Profile />} />,
        children: []
      },

      {
        path: 'otpconfirmation',
        // element: <ProtectedRoute element={<OTPVerification />} />,
        element:<OTPVerification />,
        children: []
      },

      {
        path: 'book',
        element: <ProtectedRoute element={<BookingPage />} />,
        children: []
      },
      {
        path: 'paymentsuccess',
        element: <ProtectedRoute element={<PaymentSuccess />} />,
        children: []
      }      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);