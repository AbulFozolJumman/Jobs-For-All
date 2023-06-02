import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blog from './components/Blog/Blog';
import JobDetails from './components/JobDetails/JobDetails';
import ErrorPage from './components/Error/Error';
import ShowError from './components/ShowError';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json")
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/error",
        element: <ShowError></ShowError>
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch("/data.json")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
