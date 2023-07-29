import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import Root from './Root';
import Dashboard from "./pages/Dashboard";
import MembersPage from './pages/MembersPage';
import GiftPage from './pages/GiftPage';
import UserMessages from './pages/UserMessages';
import ErrorPage from './pages/ErrorPage';
import AddProject from './pages/AddProject';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/dashboard",
      element: <Root />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />
        },
        {
          path: "/dashboard/members",
          element: <MembersPage />
        },
        {
          path: "/dashboard/gifts",
          element: <GiftPage />
        },
        {
          path: "/dashboard/chats",
          element: <UserMessages />
        },
        {
          path: '/dashboard/addproject',
          element: <AddProject />
        }
      ]
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App