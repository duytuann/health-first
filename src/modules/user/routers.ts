import MainLayout from 'layouts/Main';
import { RouterConfig } from 'router/AppRoute';
import User from './pages/User';
import Authorize from './pages/Authorize';

const routes: RouterConfig[] = [
  {
    path: '/user',
    page: User,
    exact: true,
    layout: MainLayout,
  },
  {
    path: '/authorize',
    page: Authorize,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
