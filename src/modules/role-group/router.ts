import MainLayout from 'layouts/Main';
import { RouterConfig } from 'router/AppRoute';
import RoleGroupManagement from './pages/RoleGroupManagement';

const routes: RouterConfig[] = [
  {
    path: '/permissions',
    page: RoleGroupManagement,
    exact: true,
    layout: MainLayout,
    // TabIds: [7],
  },
];

export default routes;
