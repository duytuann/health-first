import AuthLayout from 'layouts/AuthLayout';
import { RouterConfig } from 'router/AppRoute';
import Login from './pages/Login';

const routes: RouterConfig[] = [
  {
    path: '/login',
    page: Login,
    exact: true,
    layout: AuthLayout,
  },
];

export default routes;
