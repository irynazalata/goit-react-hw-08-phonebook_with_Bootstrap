import { lazy } from 'react';

const routes = [
  {
    exact: true,
    path: '/',
    name: 'Home',
    component: lazy(() => import('./pages/Home/Home')),
    private: false,
    restricted: false,
  },
  {
    exact: true,
    path: '/register',
    name: 'Register',
    component: lazy(() => import('./pages/Registration/Registration')),
    private: false,
    restricted: true,
  },
  {
    exact: true,
    path: '/login',
    name: 'Login',
    component: lazy(() => import('./pages/Loginization/Loginization')),
    private: false,
    restricted: true,
  },
  {
    exact: true,
    path: '/contacts',
    name: 'Contacts',
    component: lazy(() => import('./pages/Contacts/Contacts')),
    private: true,
    restricted: false,
  },
];

export default routes;
