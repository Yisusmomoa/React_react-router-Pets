import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Error from './components/Error/Error'
import Pets from './components/Pets/Pets';
import PetDetail from './components/Pet/PetDetail';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Home></Home>
      },
      {
        path:"/home",
        element:<Home></Home>,
        errorElement:<Error/>
      },
      {
        path:"/pets",
        element:<Pets></Pets>,
        errorElement:<Error/>
      },
      {
        path:"/pets/:petId",
        element:<PetDetail></PetDetail>,
        errorElement:<Error/>
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
