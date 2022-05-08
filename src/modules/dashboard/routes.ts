import MainLayout from 'layouts/Main';
import { RouterConfig } from 'router/AppRoute';
import Dashboard from './pages/Dashboard';

const routes: RouterConfig[] = [
  {
    path: '/dashboard',
    page: Dashboard,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
