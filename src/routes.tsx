import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { Home } from '@/pages/app/home'
import { SignIn } from '@/pages/register/sign-in'
import { SignUp } from '@/pages/register/sign-up'

import { AdminLayout } from './pages/_layouts/admin'
import { RegisterLayout } from './pages/_layouts/register'
import { AdminHome } from './pages/admin/home'
import { Contact } from './pages/app/contact'
import { Faq } from './pages/app/faq'
import { Posts } from './pages/app/posts'
import { AuthHome } from './pages/auth/home'
import { PrivateRoutes } from './private-routes'

export const router = createBrowserRouter([
  // No-Authenticated User routes
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/postagens',
        element: <Posts />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/contato',
        element: <Contact />,
      },
    ],
  },

  // Auth routes
  {
    path: '/',
    element: <RegisterLayout />,
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

  // Admin layout
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: 'admin/',
        element: <PrivateRoutes element={<AdminHome />} />,
      },
    ],
  },

  // Authenticated User routes
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'app/',
        element: <AuthHome />,
      },
    ],
  },
])
