import MainLayout from 'layouts/Main';
import { RouterConfig } from 'router/AppRoute';
import Plan from './pages/Plan';
import Activity from './pages/Activity';

const routes: RouterConfig[] = [
    {
        path: '/plan',
        page: Plan,
        exact: true,
        layout: MainLayout,
    },
    {
        path: `/plan/:id`,
        page: Activity,
        exact: true,
        layout: MainLayout,
    },
];

export default routes;
