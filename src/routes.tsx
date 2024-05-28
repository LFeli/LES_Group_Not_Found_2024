import { createBrowserRouter } from 'react-router-dom'

import { AdminLayout } from '@/pages/_layouts/admin'
import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { RegisterLayout } from '@/pages/_layouts/register'
import { AdminHome } from '@/pages/admin/home'
import { Contact } from '@/pages/app/contact'
import { Faq } from '@/pages/app/faq'
import { Home } from '@/pages/app/home'
import { Posts } from '@/pages/app/posts'
import { Sponsor } from '@/pages/app/sponsor'
import { PrivateRoute } from '@/private-route'

import { DonationsAuth } from './pages/auth/donations'
import { AuthHome } from './pages/auth/home'
import { PostAuth } from './pages/auth/posts'
import { ReportAuth } from './pages/auth/reports'
import { SponsorAuth } from './pages/auth/sponsor'
import { SponsorVoucher } from './pages/auth/sponsor/sponsor-voucher'
import { SignIn } from './pages/register/sign-in'
import { SignUp } from './pages/register/sign-up'

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
        path: '/patrocinador',
        element: <Sponsor />,
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

  // Authenticated User routes
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '/app/',
        element: (
          <PrivateRoute
            element={<AuthHome />}
            routeType={'Usuario' || 'Patrocinador'}
          />
        ),
      },

      {
        path: '/app/postagens',
        element: (
          <PrivateRoute
            element={<PostAuth />}
            routeType={'Usuario' || 'Patrocinador'}
          />
        ),
      },

      {
        path: '/app/patrocinador',
        element: (
          <PrivateRoute element={<SponsorAuth />} routeType={'Usuario'} />
        ),
      },

      {
        path: '/app/patrocinador',
        element: (
          <PrivateRoute
            element={<SponsorVoucher />}
            routeType={'Patrocinador'}
          />
        ),
      },

      {
        path: '/app/doacoes',
        element: (
          <PrivateRoute
            element={<DonationsAuth />}
            routeType={'Usuario' || 'Patrocinador'}
          />
        ),
      },

      {
        path: '/app/denuncia',
        element: (
          <PrivateRoute
            element={<ReportAuth />}
            routeType={'Usuario' || 'Patrocinador'}
          />
        ),
      },
    ],
  },

  // Admin layout
  {
    path: '/',
    element: <AdminLayout />,
    children: [
      {
        path: '/admin/',
        element: <PrivateRoute element={<AdminHome />} routeType={'Admin'} />,
      },
    ],
  },
])
