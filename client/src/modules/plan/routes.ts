import MainLayout from 'layouts/Main';
import { RouterConfig } from 'router/AppRoute';
import Plan from './pages/Plan';

const routes: RouterConfig[] = [
  {
    path: '/plan',
    page: Plan,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
