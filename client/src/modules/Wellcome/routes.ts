import MainLayout from 'layouts/Main';
import { RouterConfig } from 'router/AppRoute';
import Wellcome from '.';

const routes: RouterConfig[] = [
    {
        path: '/',
        page: Wellcome,
        exact: true,
        layout: MainLayout,
    },
];

export default routes;
