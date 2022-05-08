import MainLayout from 'layouts/Main';
import { RouterConfig } from 'router/AppRoute';
import Workflow from '../Workflow';

const routes: RouterConfig[] = [
  {
    path: '/workflow',
    page: Workflow,
    exact: true,
    layout: MainLayout,
  },
];

export default routes;
