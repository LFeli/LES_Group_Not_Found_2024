import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './components/pages/_layouts/app'
import { AuthLayout } from './components/pages/_layouts/auth'
import { Home } from './components/pages/app/home'
import { SignIn } from './components/pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/login',
        element: <SignIn />,
      },
    ],
  },
])
