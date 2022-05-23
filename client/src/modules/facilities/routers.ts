import MainLayout from 'layouts/Main';
import { RouterConfig } from 'router/AppRoute';
import Facilities from './pages/Facilities';

const routes: RouterConfig[] = [
    {
        path: '/facilities',
        page: Facilities,
        exact: true,
        layout: MainLayout,
    },
];

export default routes;
