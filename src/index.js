import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import SinglePost from './pages/SinglePost';
import UserProfile from './pages/UserProfile';
import ConnectionProvider from './context/connection';
import BlogProvider from './context/blog';
import App from './App';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/post/:id",
    element: <SinglePost />,
  },
  {
    path: "/user",
    element: <UserProfile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConnectionProvider>
    <BlogProvider>
    <App />
    <RouterProvider router={router} />
    </BlogProvider>
    </ConnectionProvider>
  </React.StrictMode>
);

