import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { Home } from '@/pages/app/home'
import { SignIn } from '@/pages/auth/sign-in'
import { SignUp } from '@/pages/auth/sign-up'

import { PrivateRoutes } from './private-routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
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
      {
        path: '/cadastro',
        element: <SignUp />,
      },
    ],
  },

  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'app/home',
        element: <PrivateRoutes element={<Home />} />,
      },
    ],
  },
])
